import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../shared/reservation/reservation.service';
import { LoginService } from '../shared/login/login.service';

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {

  constructor(private reservationservice: ReservationService,private loginservice : LoginService) { }

  ngOnInit(): void {
    this.getallreservation()
  }

  reservationarray:any
  getallreservation(){
    this.reservationservice.getallreservation({user_id:this.loginservice.getid()}).subscribe(
      (res:any)=>{
        if(res.success){
          this.reservationarray = res.data
        }
      }
    )
  }

  getdate(date:any){
    return date.split('T',1);
  }


}
