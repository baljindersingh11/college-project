import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AdminauthService } from '../shared/adminauth/adminauth.service';
import { LoginService } from '../shared/login/login.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {


AdminloginForm = new FormGroup({
  'email': new FormControl(''),
  'password': new FormControl('')
})
  constructor(private toastr : ToastrService, private Router: Router, private adminauth: AdminauthService, private loginservice: LoginService) { }

  ngOnInit(): void {
    if (this.loginservice.gettoken() != null) {
      this.Router.navigateByUrl("/layout/home")
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
          this.Router.navigateByUrl('/layout/home')
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
