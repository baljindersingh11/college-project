import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  _id:any
  constructor(private activatedroutes : ActivatedRoute, private userservice: UserService) { }

  ngOnInit(): void {
    this._id = this.activatedroutes.snapshot.paramMap.get('_id')
    this.getsingle()
  }

  singleuser : any
  getsingle(){
    this.userservice.singleuser({'_id':this._id}).subscribe(
      (res:any)=>{
        if(res.success){
          this.singleuser = res.data
        }
      }
    )
  }
}
