import { Injectable } from '@angular/core';

@Injectable({
  providedIn:"root"
})
export class LoginService {

  constructor() { }
  setsession(result:any){
    sessionStorage.setItem("_id",result.data._id)
    sessionStorage.setItem("userType",result.data.userType)
    sessionStorage.setItem("email",result.data.email)
    sessionStorage.setItem("token",result.token)

  }
  getemail(){
    return sessionStorage.getItem("email")
  }
  gettoken(){
    return sessionStorage.getItem("token")
  }
  getuserType(){
    return sessionStorage.getItem("userType")
  }
  getid(){
    return sessionStorage.getItem("_id")
  }
removesession(){
  sessionStorage.removeItem("email")
  sessionStorage.removeItem("token")
  sessionStorage.removeItem("userType")
  sessionStorage.removeItem("_id")
}
}
