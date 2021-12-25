import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-edithouse-house-owner',
  templateUrl: './edithouse-house-owner.component.html',
  styleUrls: ['./edithouse-house-owner.component.css']
})
export class EdithouseHouseOwnerComponent implements OnInit {
  form: FormGroup;
  user: any = {} as any;

  constructor(
    private formBuilder : FormBuilder,
    private api: ApiService   
  ) { 
    this.form = this.formBuilder.group({

    });
  }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;
  });
  }

}
