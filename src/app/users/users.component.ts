import { Component, OnInit } from '@angular/core';
import { Iuser } from '../model/data';
import { UserServiceService } from '../shared/services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:Iuser[]=[]
  activeId:number=1;
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    this.users=this.userService.getAllUsers()
  }

}
