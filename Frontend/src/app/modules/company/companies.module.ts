import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddEditCompanyComponent } from "./add-edit/container/add-edit-company.component";
import { StandarInputComponent } from "src/app/common/standar-input/standar-input.component";
import { StandarTextareaComponent } from "src/app/common/standar-textarea/standar-textarea.component";
import { CompanyGeneralDetailsComponent } from './add-edit/components/company-general-details/company-general-details.component';
import { StandarSelectSearchComponent } from "src/app/common/standar-select-search/standar-select-search.component";
import { SharedComponentsModule } from "src/app/shared/shared.module";
import { StandarLinkInputComponent } from "src/app/common/standar-link-input/standar-link-input.component";
import { CompanyInfoComponent } from './add-edit/components/company-info/container/company-info.component';
import { ParentComponent } from './add-edit/components/company-info/components/parent/parent.component';
import { FoundedComponent } from './add-edit/components/company-info/components/founded/founded.component';
import { StatusComponent } from './add-edit/components/company-info/components/status/status.component';
import { CommonModule } from "@angular/common";
import { LinksComponent } from "./add-edit/components/company-info/components/links/links.component";
import { StandarLoaderComponent } from "src/app/common/standar-loader/standar-loader.component";
import { CompanyService } from "src/app/data/services/company.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDatetimePickerComponent } from "src/app/shared/components/mat-datetime-picker/mat-datetime-picker.component";
// 

const routes: Routes = [
    {path:'', component:AddEditCompanyComponent},
]

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        StandarInputComponent,
        StandarTextareaComponent,
        StandarSelectSearchComponent,
        StandarLinkInputComponent,
        SharedComponentsModule,
        StandarLoaderComponent,
        FormsModule,
        ReactiveFormsModule,
        CompanyGeneralDetailsComponent,
        MatDatetimePickerComponent
    ],
    providers:[CompanyService],
    declarations:[
    AddEditCompanyComponent,
    CompanyInfoComponent,
    ParentComponent,
    FoundedComponent,
    StatusComponent,
    LinksComponent
  ],
    exports:[
        RouterModule,
        AddEditCompanyComponent
    ]
})
export class CompanyModule{}