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
  user:User | undefined;
  constructor(private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
     this.route.params.subscribe((param:Params)=>{
      const id:number = +param['id'];
      this.user= this.userService.userById(id);
      
    });
  }

}
