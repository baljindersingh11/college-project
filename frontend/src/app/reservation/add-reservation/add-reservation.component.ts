import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/shared/reservation/reservation.service';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/shared/login/login.service';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/shared/brand/brand.service';
import { CarsService } from 'src/app/shared/cars/cars.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {
  
  addreservation = new FormGroup({
    'user_id': new FormControl(),
    'brand_id': new FormControl(),
    'car_id': new FormControl(),
    'reservation_date': new FormControl(),
    'start_time': new FormControl(),
    'reservation_status': new FormControl(),
    'pickup_description': new FormControl(),
    'pickup_date': new FormControl(),
    'pickup_time': new FormControl(),
    'hours_booked': new FormControl(),
    'price_per_hour': new FormControl(),
    'damage_cost': new FormControl(),
    'total_price': new FormControl(),
    'status': new FormControl(),
  })

  constructor(private reservationservice: ReservationService,private loginservice: LoginService,private router : Router,private brandservice: BrandService,private carservice : CarsService,private toastr : ToastrService) { }

  ngOnInit(): void {
    if(this.loginservice.gettoken() == null)
    {
      this.router.navigateByUrl("/layout/userlogin")
    }   
    this.getallbrand()
    // this.getallcar()
  }

  brandarray:any
  getallbrand(){
    this.brandservice.getallbrand({}).subscribe(
      (res:any)=>{
        if(res.success){
          this.brandarray = res.data
        }
      }
    )
  }

  cararray:any
  getallcar(brand_id:any){
    this.carservice.getallcar({brand_id:brand_id.target.value}).subscribe(
      (res:any)=>{
        if(res.success){
          this.cararray = res.data
        }
      }
    )
  }

  changecar(event:any)
  {
    // console.log(event.target.value)
    this.carservice.getsinglecar({_id:event.target.value}).subscribe(
      (res:any)=>{
        // console.log(res.data)
        this.addreservation.patchValue({'price_per_hour':res.data.hourly_rent})
        this.addreservation.patchValue({'damage_cost':res.data.original_price})
      },
      err=>{

      }
    )
  }
  totalcost = 0
  submit(){
    this.totalcost = (this.addreservation.value.hours_booked)*(this.addreservation.value.price_per_hour)
    this.addreservation.patchValue({'total_price':this.totalcost})
    this.addreservation.patchValue({'reservation_status':'Reserved'})
    this.addreservation.patchValue({'reservation_status':'Reserved'})
    this.addreservation.patchValue({'user_id':this.loginservice.getid()})

    this.reservationservice.addreservation(this.addreservation.value).subscribe(
      (res:any)=>{
        // console.log(res)
        this.toastr.success(res.msg)
      }
    )
  }
}
