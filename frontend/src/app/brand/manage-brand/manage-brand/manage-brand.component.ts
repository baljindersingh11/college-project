import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/shared/brand/brand.service';

@Component({
  selector: 'app-manage-brand',
  templateUrl: './manage-brand.component.html',
  styleUrls: ['./manage-brand.component.css']
})
export class ManageBrandComponent implements OnInit {

  constructor(private brandservice: BrandService) { }

  ngOnInit(): void {
    this.getall()
  }
  brandarray:any
  getall(){
    this.brandservice.getallbrand({}).subscribe(
      (res:any)=>{
        if(res.success){
          this.brandarray = res.data
        }
      }
    )
  }
  
}
