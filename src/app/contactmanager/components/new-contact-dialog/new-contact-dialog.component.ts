import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.css']
})
export class NewContactDialogComponent implements OnInit {
  user : User;
  avatars=[
    'svg-1','svg-2','svg-3','svg-4'
  ]
  name = new FormControl('', [Validators.required]);

  getErrorMessage() : string {
    return this.name.hasError('required') ? 'you must enter a name':'';
  } 
  constructor(private dialogRef:DialogRef<any>) { }

  ngOnInit(): void {
    this.user = new User();
  }
  save() : void {
    this.user.name = this.name.value;
  this.dialogRef.close(this.user);
  }
  cancel(): void{
   this.dialogRef.close(null);
  }
}
