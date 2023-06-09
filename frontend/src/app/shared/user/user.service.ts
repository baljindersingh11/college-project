import { Injectable, inject, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl: any
  token: any
  constructor(private http: HttpClient, @Inject('baseurl') _baseurl: any, private tokenservice: LoginService) {
    this.baseurl = _baseurl
    
    this.token = this.tokenservice.gettoken()
  }
  add(form: any) {
    // console.log(this.token )
    var header_object = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(this.baseurl + 'admin/adduser', form)
  }

  getalluser(form: any) {
    var header_object = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(this.baseurl + 'admin/getall', form, { headers: header_object })
  }
  singleuser(form: any) {
    var header_object = new HttpHeaders().set("Authorization", this.token)
    return this.http.post(this.baseurl + 'admin/getsingle', form, { headers: header_object })
  }
}

