import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login/login.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginservice: LoginService, private Router: Router) { }
  
  isadminlogin : any = false
  isuserlogin : any = false
  utype : any 

  ngOnInit(): void {
    this.utype = this.loginservice.getuserType()
    if(this.utype == 1)
    {
      this.isadminlogin = true
      this.isuserlogin = false
    }
    else if(this.utype == 2)
    {
      this.isadminlogin = false
      this.isuserlogin = true
    }
  }

  logout(){
    this.loginservice.removesession()
    this.Router.navigateByUrl('/layout/adminlogin')
  }
  userlogout(){
    this.loginservice.removesession()
    this.Router.navigateByUrl('/layout/userlogin')
  }
}
