import { HttpClient } from '@angular/common/http';
;
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private _users = new BehaviorSubject<User[]>([]);
  private dataStore:{
    users: User[];
  } 
  constructor(private http:HttpClient) { 
    this.dataStore={users:[]};
    
  }
  get users(): Observable<User[]>{
    return this._users.asObservable();

  }
  loadAll(){
    const userUrl= 'https://angular-material-api.azurewebsites.net/users';
    return this.http.get<User[]>(userUrl)
      .subscribe(data =>{
      this.dataStore.users=data;
      this._users.next(Object.assign({},this.dataStore).users);
      },
      error=>{
        console.log('failed to fetch users')
      }
        
        );
       

  }
  userById(id: number): User | undefined {
    return this.dataStore.users.find(x=>x.id==id);
  }
}
