import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {
  user:User ;
  constructor(private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
     this.route.params.subscribe((param:Params)=>{
      let id:number = +param['id'];
      if(!id) id=1;
      this.user=null ;
      this.userService.users.subscribe(users=>{
        if(users.length==0) return;
        setTimeout(()=>{
          this.user=this.userService.userById(id);

        },500);
      });
      
    });
  }

}
