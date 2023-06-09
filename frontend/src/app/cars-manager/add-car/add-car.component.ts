import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/shared/cars/cars.service';
import { FormGroup, FormControl } from '@angular/forms';
import { BrandService } from 'src/app/shared/brand/brand.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
addcar = new FormGroup({
  'car_names': new FormControl(),
  'description': new FormControl(),
  'hourly_rent': new FormControl(),
  'original_price': new FormControl(),
  'image': new FormControl(),
  'brand_id': new FormControl(),
})
  constructor(private carservice: CarsService,private brandservice : BrandService,private toastr : ToastrService,private router : Router) { }

  ngOnInit(): void {
    this.getallbrands()
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

  submit(){
    let data = new FormData()
    data.append('car_names',this.addcar.value.car_names)
    data.append('description',this.addcar.value.description)
    data.append('hourly_rent',this.addcar.value.hourly_rent)
    data.append('original_price',this.addcar.value.original_price)
    data.append('brand_id',this.addcar.value.brand_id)
    data.append('image',this.addcar.value.image)
   
    this.carservice.addcar(data).subscribe(
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
