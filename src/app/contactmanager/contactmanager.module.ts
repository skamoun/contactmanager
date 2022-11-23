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
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
const routes:Routes=[
  
  {path:'',component:ContactmanagerAppComponent,
children:[
  {path:':id',component:MaincontentComponent},
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
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  providers:[UserService]
})
export class ContactmanagerModule { }
