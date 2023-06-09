import { Component, OnInit } from '@angular/core';
import { BrandService } from '../shared/brand/brand.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private brandservice: BrandService) { }

  ngOnInit(): void {
    this.getallbrands()
  }

  brandarray:any
  getallbrands(){
    this.brandservice.getallbrand({}).subscribe(
      (res:any)=>{
        if(res.success){
          this.brandarray = res.data
        }
      }
    )
  }
}
