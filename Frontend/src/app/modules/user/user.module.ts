import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManageUserComponent } from "./manage-users/container/manage-user.component";
import { EPermission } from "src/app/core/enums/enum-permissions";
import { UserService } from "src/app/data/services/user.service";

const routes: Routes = [
    {
        path:'', 
        component:ManageUserComponent,
        data:{permissions:[EPermission.Display_User]}
    },
    // {path:'playground', component:PlaygroundComponent}
]

@NgModule({
    imports:[
        RouterModule.forChild(routes),
        ManageUserComponent
        // BrowserModule,
    ],
    providers:[UserService],
    declarations:[],
    exports:[
        RouterModule
    ]
})
export class UserModule{}