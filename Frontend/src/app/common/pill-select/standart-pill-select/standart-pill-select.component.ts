import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from 'src/app/shared/shared.module';
import { FormGroup, FormGroupDirective } from '@angular/forms';

export interface StadarInputPillOption {
  id: number
  value: string
  isVisible: boolean
}

@Component({
  selector: 'app-standart-pill-select',
  standalone: true,
  imports: [CommonModule, SharedComponentsModule],
  templateUrl: './standart-pill-select.component.html',
  styleUrls: ['./standart-pill-select.component.scss']
})
export class StandartPillSelectComponent implements OnInit {
  @ViewChild('inputForPills') inputElement:ElementRef;
  @ViewChild('inputForPillFirstChild') firstChildElement:ElementRef;
  @Input() options: Array<StadarInputPillOption> = []
  @Input() label:string = ''
  @Input() controlName = ''
  @Input() subGroup: string = ''
  @Input() apiSearchEnable: boolean = false
  @Output() searchInput = new EventEmitter<string>()
  
  filteredInputValue: Array<StadarInputPillOption> = []
  inputValue!: StadarInputPillOption | undefined
  formGroup!: FormGroup
  selectedOptions: Array<number> = []
  open:boolean = false
  noResults: boolean = false
  loader: boolean = false

  constructor(private renderer: Renderer2,public parentForm: FormGroupDirective){}

  ngOnInit(): void {
    this.filteredInputValue = this.options
    this.formGroup = this.parentForm.control.get(this.subGroup) as FormGroup
  }

  setOption(option: StadarInputPillOption) {
    this.addNewPill(option)
    this.selectedOptions.push(option.id)
    this.formGroup.controls[this.controlName].patchValue(this.selectedOptions)
    option.isVisible = false
    this.open = false
  }

  addNewPill(option: StadarInputPillOption) {
    // Create the new pill
    const newPill = this.renderer.createElement("div") as ElementRef

    // Add class to the pill
    this.renderer.addClass(newPill,'standarPill')
    
    //Create the span child element of the pill
    const eSpan = this.renderer.createElement("span")
    const newText = this.renderer.createText(option.value)
    eSpan.append(newText)
    
    // Create the remove icon element of the pill
    const removeElem = this.renderer.createElement("i")
    this.renderer.addClass(removeElem,'fa-solid')
    this.renderer.addClass(removeElem,'fa-xmark')
    this.renderer.addClass(removeElem,'remove-pill-icon')

    // this.renderer.
    this.renderer.listen(removeElem, 'click', (event) => {
      this.removePill(event, option.id)
    })

    // Append child elements to the new pill
    this.renderer.appendChild(newPill, eSpan)
    this.renderer.appendChild(newPill, removeElem)
    this.renderer.insertBefore(this.inputElement.nativeElement, newPill, this.firstChildElement.nativeElement)
    // this.renderer.appendChild(this.inputElement.nativeElement, newPill)
  }

  removePill(e, optionId: number) {
    this.renderer.removeChild(this.inputElement, e.target.parentNode)
    this.selectedOptions = this.selectedOptions.filter((x) => x !== optionId)
    this.formGroup.controls[this.controlName].patchValue(this.selectedOptions.length > 0? this.selectedOptions:null)
    this.options.forEach((x) => {
      if (x.id === optionId) {
        x.isVisible = true
      }
    })
  }

  clickToClear(){
    let children = this.inputElement.nativeElement.children
    for(let child of children) {
      if (child.classList.contains('standarPill')) {
        this.renderer.removeChild(this.inputElement.nativeElement, child);
      }
    }
    this.selectedOptions = []
  }

  inputFilter(e) {
    let searchInput = e.target.value

    if (this.apiSearchEnable) {
      this.searchInput.emit(searchInput)

      if (searchInput.length > 0){
        this.loader = true
        setTimeout(()=>{
            this.loader = false
            this.noResults = true
        }, 3000);

      }
      else {
        this.noResults = false
      }
    }
    else {
      this.filteredInputValue = this.options
      .map((option) => option)
      .filter( (x) => x.value.toLowerCase().includes(searchInput.toLowerCase()))
    }

  }

  clickOpenOptions() {
    this.open = true
    console.log(this.filteredInputValue.length === 0)
  }

  clickToClose(){
    this.open = false
  }
}