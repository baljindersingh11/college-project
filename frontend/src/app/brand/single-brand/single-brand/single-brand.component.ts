import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/shared/brand/brand.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-brand',
  templateUrl: './single-brand.component.html',
  styleUrls: ['./single-brand.component.css']
})
export class SingleBrandComponent implements OnInit {
_id:any
  constructor(private brandservice: BrandService, private activateroute: ActivatedRoute) {

   }

  ngOnInit(): void {
    this._id = this.activateroute.snapshot.paramMap.get('_id')
    this.getsingle()
  }
singlebrand:any
getsingle(){
  this.brandservice.getsinglebrand({'_id':this._id}).subscribe(
    (res:any)=>{
      if(res.success){
        this.singlebrand = res.data
      }
    }
  )
}
}
