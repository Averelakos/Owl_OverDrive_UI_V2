import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, finalize, first } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { LoginDto } from 'src/app/core/models/Auth/loginDto';
import { LocalService } from 'src/app/core/services/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterContentInit {

  loginForm: FormGroup;
  loginData: LoginDto;
  rememberMeCheckBox: any;
  loading$ = new BehaviorSubject<boolean>(false)

  constructor( private localService: LocalService, private router: Router,private readonly authService: AuthService) {
    this.authService.isAuthorized()
  }
  
  ngOnInit(): void {
    this.loginForm = this.authService.initLoginForm()
  }

  ngAfterContentInit(): void {
    this.rememberMeCheckBox = document.getElementById('rememberMe');
    this.retrieveRememberMe();
  }

  onSubmit(){
    // if (this.loginForm.valid) {
      this.rememberMe();

      this.loginData = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }

      this.authService.login(this.loginData)
      .pipe(first(),finalize(()=> this.loading$.next(false)))
      .subscribe((res) => {
        this.authService.loginActions(res)
        this.router.navigate(['/'], { replaceUrl: true })
      })
      // console.log(this.loginData)
    // }
    

    //TODO: ADD LOADER

    //   this.authService.login(loginData).subscribe( 
    //     responce => { 
    //       console.log(responce);
          
    //       // this.authService.redirectInSuccess(responce);
    //       this.isLoading = false;
    //       this.route.navigate(['/Home'])
    //     }, 
    //     errorMessage => {
    //       // console.log(errorMessage);
    //       // this.toastr.error(errorMessage)
    //       // this.error = errorMessage;
    //       this.isLoading = false;
    //     }
    //   );
  }
  
  /**
 * We create the lofin form and the controls
 * that we are going to use in the html
 * file and we assign it in the form group
 */
  // buildLoginForm(){
  //   this.loginForm = new FormGroup({
  //     username: [null],
  //     'password': new FormControl(null, [Validators.required])
  //   }, 
  //   {updateOn: 'blur'}
  //   );
  // }

  /**
   * Retrieve from local storage the login
   * values if there are saved there
   */
  retrieveRememberMe() {
    if(this.localService.getData('rememberMeCheckBox') && this.localService.getData('rememberMeCheckBox') !== ''){
      this.rememberMeCheckBox.setAttribute('checked', 'checked');
      this.loginForm.get('username')?.setValue( this.localService.getData('email'));
      this.loginForm.get('password')?.setValue( this.localService.getData('password'));
    } else {
      this.rememberMeCheckBox.removeAttribute('checked', 'checked');
    }
  }

  /**
   * If the checkBox is checked then 
   * save the email and password to the local storage 
   */
  rememberMe():void {
    if (this.rememberMeCheckBox.checked && this.loginForm.valid) {
      this.localService.saveData('email', this.loginForm.get('email')?.value);
      this.localService.saveData('password', this.loginForm.get('password')?.value);
      this.localService.saveData('rememberMeCheckBox', this.rememberMeCheckBox.value);
    }
  }

  redirectToRegisterPage() {
    this.router.navigate(['/Auth/register']);
  }
}