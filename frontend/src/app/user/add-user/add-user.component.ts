import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit 
{
  
  adduser = new FormGroup({
    'name': new FormControl(''),
    'email': new FormControl(''),
    'password': new FormControl(''),
    'contact': new FormControl(''),
  })
  
  constructor(private userservice: UserService,private toastr : ToastrService,private router : Router){ }

  ngOnInit(): void {}
 
  submit(){
    this.userservice.add(this.adduser.value).subscribe(
      (res:any)=>{
        // console.log(res)
        if(res.success)
        {
          this.toastr.success("User registered")
          this.router.navigateByUrl("/layout/userlogin")
        }
        else{
          this.toastr.error(res.msg)
        }
      }),
      (err:any)=>{
        
      }
      
  }
    
}

