import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/shared/brand/brand.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
  addbrand = new FormGroup({
    'brand_name': new FormControl(),
    'status': new FormControl(),
    

  })

  constructor(private brandservice: BrandService,private toastr: ToastrService,private router : Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.brandservice.add(this.addbrand.value).subscribe(
      (res:any)=>{
        // console.log(res)
        this.toastr.success(res.message)
        this.router.navigateByUrl("/layout/manage-brand")
      }
    )
  }

}
