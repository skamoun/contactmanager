import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Note } from '../../models/note';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit,AfterViewInit {
 @Input() notes: Note[];

 displayedColumns: string[] = ['position', 'title', 'date'];
 dataSource:MatTableDataSource<Note> ;
 @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.dataSource=new MatTableDataSource<Note>(this.notes);
  }

}
