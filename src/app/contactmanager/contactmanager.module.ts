import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';

import {FlexLayoutModule} from '@angular/flex-layout';
import { Routes,RouterModule } from '@angular/router';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
const routes:Routes=[
  
  {path:'',component:ContactmanagerAppComponent,
children:[
  {path:'',component:MaincontentComponent}
]},
  {
    path:'**',redirectTo:''
  }

]

@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    SidenavComponent,
    MaincontentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactmanagerModule { }
