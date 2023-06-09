import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/shared/brand/brand.service';
import { CarsService } from 'src/app/shared/cars/cars.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  addcar = new FormGroup({
    '_id': new FormControl(),
    'car_names': new FormControl(),
    'description': new FormControl(),
    'hourly_rent': new FormControl(),
    'original_price': new FormControl(),
    'image': new FormControl(),
    'brand_id': new FormControl(),
  })
  constructor(private carservice: CarsService,private brandservice : BrandService,private toastr : ToastrService,private router : Router,private activatedroute : ActivatedRoute) { }

  ngOnInit(): void {
    this.addcar.patchValue({'_id':this.activatedroute.snapshot.paramMap.get('_id')})
    this.getallbrands()
    this.getsinglecar()
  }
  
  brandarray:any
  getallbrands(){
    this.brandservice.getallbrand({}).subscribe(
      (res:any)=>{
        if(res.success){
          this.brandarray = res.data
          // console.log(this.brandarray)
        }
      }
    )
  }

  photo(event:any){
    this.addcar.patchValue({'image':event.target.files[0]})
  }

  singlecar:any
  getsinglecar(){
    this.carservice.getsinglecar({'_id':this.activatedroute.snapshot.paramMap.get('_id')}).subscribe(
      (res:any)=>{
        this.singlecar = res.data
        // console.log(this.singlecar)
        this.addcar.patchValue({'brand_id':this.singlecar.brand_id})
        this.addcar.patchValue({'car_names':this.singlecar.car_names})
        this.addcar.patchValue({'description':this.singlecar.description})
        this.addcar.patchValue({'hourly_rent':this.singlecar.hourly_rent})
        this.addcar.patchValue({'original_price':this.singlecar.original_price})
        this.addcar.patchValue({'image':this.singlecar.image})
      }
    )
  }
  
  submit(){
    let data = new FormData()
    data.append('_id',this.addcar.value._id)
    data.append('car_names',this.addcar.value.car_names)
    data.append('description',this.addcar.value.description)
    data.append('hourly_rent',this.addcar.value.hourly_rent)
    data.append('original_price',this.addcar.value.original_price)
    data.append('brand_id',this.addcar.value.brand_id)
    data.append('image',this.addcar.value.image)
    
    this.carservice.update(data).subscribe(
    (res:any)=>{
      // console.log(res)
      this.toastr.success(res.message)
      this.router.navigateByUrl("/layout/manage-car")
    }),
    (err:any)=>{
      // console.log(err)
    }
  }

}
