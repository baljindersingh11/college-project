import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminauthService } from '../shared/adminauth/adminauth.service';
import { LoginService } from '../shared/login/login.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {


  AdminloginForm = new FormGroup({
    'email': new FormControl(''),
    'password': new FormControl('')
  })
    constructor(private toastr : ToastrService, private router: Router, private adminauth: AdminauthService, private loginservice: LoginService) { }

    ngOnInit(): void {
      if (this.loginservice.gettoken() != null) {
        this.router.navigateByUrl("/layout/home")
      }
    }
    onclick() {
      // this.spinner.show()
  
      // if(this.AdminloginForm.value.email == 'admin@gmail.com' && this.AdminloginForm.value.password == '123'){
      //   this.spinner.hide()
      //   this.toastr.success('Success','login successfully',{positionClass: 'toast-top-center'})
      //   this.Router.navigateByUrl('/layout/home')
      // }
      // else{
      //   this.toastr.error('Error!','Invalid Email or password',{progressAnimation: 'decreasing',positionClass: 'toast-top-center'})
  
      // }
      // this.spinner.show()
      console.log()
      this.adminauth.login(this.AdminloginForm.value).subscribe(
        (res: any) => {
          // this.spinner.hide()
          if (res.success) {
            this.loginservice.setsession(res)
            this.toastr.success('success', res.message)
            this.router.navigateByUrl('/layout/home')
          }
          else {
            this.toastr.error('Error', res.message)
          }
        },
        // err=> {
        //   this.spinner.hide()
        //   console.log(err)
        // }
      )
    }
  }
  