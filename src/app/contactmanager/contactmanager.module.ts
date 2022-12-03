import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {  MatSelectModule} from '@angular/material/select';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
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

import {MatTabsModule} from '@angular/material/tabs';
import { NotesComponent } from './components/notes/notes.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';
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
    MaincontentComponent,
    NotesComponent,
    NewContactDialogComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    MatSortModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatPaginatorModule,
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
