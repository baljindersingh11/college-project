import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/shared/reservation/reservation.service';

@Component({
  selector: 'app-manage-reservation',
  templateUrl: './manage-reservation.component.html',
  styleUrls: ['./manage-reservation.component.css']
})
export class ManageReservationComponent implements OnInit {

  constructor(private reservationservice: ReservationService) { }

  ngOnInit(): void {
    this.getallreservation()
  }

  reservationarray:any
  getallreservation(){
    this.reservationservice.getallreservation({}).subscribe(
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
