import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-homepage-boat-owner',
  templateUrl: './homepage-boat-owner.component.html',
  styleUrls: ['./homepage-boat-owner.component.css']
})
export class HomepageBoatOwnerComponent implements OnInit {
  form: FormGroup;
  boats: any;
  addHouseBox : boolean = false;
  user: any = {} as any;
  images: any;

  constructor(
    private formBuilder : FormBuilder,
    private router: Router,
    private api: ApiService   
    ) {
      
      this.boats = [];

      this.form = this.formBuilder.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        promoDescription: ['', Validators.required],
        pricelist: ['', Validators.required],
        behaviourRules: ['', Validators.required],
        extraService: ['', Validators.required],
        extraPrice: ['', Validators.required],
        type: ['', Validators.required],
        length: ['', Validators.required],
        engineNumber: ['', Validators.required],
        enginePower: ['', Validators.required],
        maxSpeed: ['', Validators.required],
        navEquipment: ['', Validators.required],
        capacity: ['', Validators.required],
        cancelConditions: ['', Validators.required],
        fishingEquipment: ['', Validators.required]
      })
     }

  ngOnInit(): void {
    this.api.loadBoat().subscribe((response:any) => {
      this.boats = response;
  });
    this.api.current().subscribe((response:any) => {
      this.user = response;
  });
  }

  onDelete(id: number) {
    this.api.deleteMyBoat(id).subscribe((response:any) => {
      this.boats = this.boats.filter((e:any) => e.id != id);
  });
  }

}
