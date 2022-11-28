import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../../models/note';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
 @Input() notes: Note[];

 displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
 dataSource:MatTableDataSource<Note> ;
  constructor() { }

  ngOnInit(): void {
  }

}
