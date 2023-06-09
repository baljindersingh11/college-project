import { Component, Inject, OnInit } from '@angular/core';
import { BrandService } from '../shared/brand/brand.service';
import { CarsService } from '../shared/cars/cars.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-view-cars',
  templateUrl: './user-view-cars.component.html',
  styleUrls: ['./user-view-cars.component.css']
})
export class UserViewCarsComponent implements OnInit {
  imgurl : any
  constructor(private carservice : CarsService,private dom : DomSanitizer,@Inject('baseurl') _baseurl:any,private acivatedroute : ActivatedRoute) { 
    this.imgurl = _baseurl
  }

  ngOnInit(): void {
    this.getallcar()
  }

  getimage(photo:any){
    return this.dom.bypassSecurityTrustResourceUrl(this.imgurl+photo)
  }

  cararray:any
  getallcar(){
    this.carservice.getallcar({brand_id:this.acivatedroute.snapshot.paramMap.get('brand_id')}).subscribe(
      (res:any)=>{
        if(res.success){
          this.cararray = res.data
          console.log(this.cararray)
        }
      }
    )
  }

}
