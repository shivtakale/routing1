import { Injectable } from '@angular/core';
import { Iuser } from 'src/app/model/data';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users:Iuser[]=[{
    userName: "Nagesh",
    id: 1
  },
  {
    userName: "Narendra",
    id: 2
  }
]
  constructor() { }

  getAllUsers():Iuser[]{
  return this.users;
  }

  getUser(id:number){
    return this.users.find(user =>user.id === id)
  }

}
