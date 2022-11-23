import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Iuser } from 'src/app/model/data';
import { UserServiceService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
public user:Iuser | undefined;
userId:number=1;

  constructor(private userservice:UserServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((myParams:Params) =>{console.log(myParams);
    this.userId= +myParams['id']
    this.user=this.userservice.getUser(this.userId)
    }
    )

  }

}
