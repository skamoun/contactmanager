import { Component, OnInit, ViewChild } from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
 const SMALL_WIDTH_BREAKPOINT=720;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav : MatSidenav | undefined;
  
 public isScreenSmall : boolean | undefined;
 users :Observable<User[]> | undefined;
  constructor(private breakpointObserver : BreakpointObserver,private userService : UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.breakpointObserver
    .observe([`(max-width:${SMALL_WIDTH_BREAKPOINT}px)`])
    .subscribe((state:BreakpointState)=>{
    this.isScreenSmall=state.matches;
    });
    this.users=this.userService.users;
    this.userService.loadAll();
    this.router.events.subscribe(()=>{
      if(this.isScreenSmall){
        this.sidenav?.close;
      }
    });

  }
  
}
