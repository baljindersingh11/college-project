import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
baseurl:any
token:any
  constructor(private http: HttpClient,@Inject('baseurl')_baseurl:any,private tokenservice: LoginService) { 
    this.baseurl=_baseurl
    this.token=this.tokenservice.gettoken()

  }
  addcar(form:any){
    var header_object = new HttpHeaders().set('Authorization',this.token)
    return this.http.post(this.baseurl+'admin/addcar',form,{headers:header_object})
  }
  getallcar(form:any){
    var header_object = new HttpHeaders().set('Authorization',this.token)
    return this.http.post(this.baseurl+'admin/getallcar',form)
  }
  getsinglecar(form:any){
    var header_object = new HttpHeaders().set('Authorization',this.token)
    return this.http.post(this.baseurl+'admin/getsinglecar',form,{headers:header_object})
  }
  update(form:any){
    var header_object = new HttpHeaders().set('Authorization',this.token)
    return this.http.post(this.baseurl+'admin/updatecar',form,{headers:header_object})
  }
}
