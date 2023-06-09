import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/shared/cars/cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.css']
})
export class SingleCarComponent implements OnInit {
_id: any
  constructor(private carservice: CarsService, private activatedroutes: ActivatedRoute) { }

  ngOnInit(): void {
    this._id = this.activatedroutes.snapshot.paramMap.get('_id')
    this.getsinglecar()
  }

  singlecar:any
  getsinglecar(){
    this.carservice.getsinglecar({'_id':this._id}).subscribe(
      (res:any)=>{
        if(res.success){
          this.singlecar = res.data
        }
      }
    )
  }
}
