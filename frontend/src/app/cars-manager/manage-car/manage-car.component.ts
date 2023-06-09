import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CarsService } from 'src/app/shared/cars/cars.service';

@Component({
  selector: 'app-manage-car',
  templateUrl: './manage-car.component.html',
  styleUrls: ['./manage-car.component.css']
})
export class ManageCarComponent implements OnInit {

  imgurl : any
  constructor(private carservice : CarsService,private dom : DomSanitizer,@Inject('baseurl') _baseurl:any) { 
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
    this.carservice.getallcar({}).subscribe(
      (res:any)=>{
        if(res.success){
          this.cararray = res.data
        }
      }
    )
  }
}
