import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  baseurl:any
  token:any

  constructor( private http: HttpClient,@Inject('baseurl')_baseurl:any, private tokenserivce : LoginService) {
    this.baseurl = _baseurl
    this.token = this.tokenserivce.gettoken()
   }

  addreservation(form:any){
    var headers_object = new HttpHeaders().set("Authorization",this.token)
   return this.http.post(this.baseurl+"admin/addreservation",form,{headers : headers_object})
  }
  getallreservation(form:any){
    var headers_object = new HttpHeaders().set("Authorization",this.token)
   return this.http.post(this.baseurl+"admin/getallreservations",form,{headers : headers_object})
  }
}
