import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  baseurl: any
  token: any

  constructor(private http: HttpClient, @Inject('baseurl') _baseurl: any, private tokenservice: LoginService) {
    this.baseurl = _baseurl
    this.token = this.tokenservice.gettoken()
  }

  add(form: any) {
    var header_object = new HttpHeaders().set('Authorization', this.token)
    return this.http.post(this.baseurl + "admin/addbrand", form, { headers: header_object })
  }

  getallbrand(form: any) {
    var header_object = new HttpHeaders().set('Authorization', this.token)
    return this.http.post(this.baseurl + "admin/getallbrand", form)
  }
  
  getsinglebrand(form: any) {
    var header_object = new HttpHeaders().set('Authorization', this.token)
    return this.http.post(this.baseurl + "admin/getsinglebrand", form, { headers: header_object })
  }

  update(form: any) {
    var header_object = new HttpHeaders().set('Authorization', this.token)
    return this.http.post(this.baseurl + "admin/updatebrand", form, { headers: header_object })
  }
  
}
