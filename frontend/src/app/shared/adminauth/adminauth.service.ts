import { Injectable, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AdminauthService {
baseurl:any
  constructor(private http : HttpClient,@Inject('baseurl')_baseurl:any) {
    this.baseurl = _baseurl
   }

 login(form:any)
 {
  return this.http.post(this.baseurl+"admin/login",form)
 }
}