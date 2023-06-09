import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.getall()
  }
  userarray : any
  getall(){
    this.userservice.getalluser({}).subscribe(
      (res:any)=>{
        if(res.success){
          this.userarray = res.data
        }
      }
    )
  }

}
