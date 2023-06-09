import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/shared/brand/brand.service';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css']
})
export class UpdateBrandComponent implements OnInit {
  addbrand = new FormGroup({
    '_id':new FormControl(),
    'brand_name': new FormControl(),
    'status': new FormControl(),
  })

  constructor(private brandservice: BrandService,private toastr: ToastrService,private router : Router,private activatedroute : ActivatedRoute) { }

  ngOnInit(): void {
    this.singlebrand()
  }

  singlebrand(){
    this.brandservice.getsinglebrand({"_id":this.activatedroute.snapshot.paramMap.get('_id')}).subscribe(
      (res:any)=>{
        this.addbrand.patchValue({'brand_name':res.data.brand_name})
        this.addbrand.patchValue({'status':res.data.status})
      }
    )
  }

  submit(){
    this.addbrand.patchValue({"_id":this.activatedroute.snapshot.paramMap.get('_id')})
    this.brandservice.update(this.addbrand.value).subscribe(
      (res:any)=>{
        // console.log(res)
        this.toastr.success(res.message)
        this.router.navigateByUrl("/layout/manage-brand")
      }
    )
  }

}
