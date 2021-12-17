import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-homepage-house-owner',
  templateUrl: './homepage-house-owner.component.html',
  styleUrls: ['./homepage-house-owner.component.css']
})
export class HomepageHouseOwnerComponent implements OnInit {
  form: FormGroup;
  homes: any;
  user: any;

  constructor(
    private formBuilder : FormBuilder,
    private router: Router,
    private api: ApiService   
    ) {
      
      this.homes = [];

      this.form = this.formBuilder.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        numberOfRooms: ['', Validators.required],
        numberOfBeds: ['', Validators.required],
        promoDescription: ['', Validators.required],
        pricelist: ['', Validators.required],
        behaviourRules: ['', Validators.required],
        extraService: ['', Validators.required]
      })

     }

  addHouseBox : boolean = false;
  images: any;

  ngOnInit(): void {
    this.api.loadHouse().subscribe((response:any) => {
        this.homes = response;
    });
    this.api.current().subscribe((response:any) => {
        this.user = response;      
    });
  }

  onSubmit() {

      const name = this.form.get('name')?.value;
      const address = this.form.get('address')?.value;
      const numberOfRooms = this.form.get('numberOfRooms')?.value;
      const numberOfBeds = this.form.get('numberOfBeds')?.value;
      const promoDescription = this.form.get('promoDescription')?.value;
      const pricelist = this.form.get('pricelist')?.value;
      const behaviourRules = this.form.get('behaviourRules')?.value;
      const extraService = this.form.get('extraService')?.value;

      let data = {
        name: name,
        address: address,
        numberOfRooms: numberOfRooms,
        numberOfBeds: numberOfBeds,
        promoDescription: promoDescription,
        pricelist: pricelist,
        behaviourRules: behaviourRules,
        extraService: extraService,
        interiorImage: this.images['interiorImage'],
        exteriorImage: this.images['exteriorImage']
      }

      this.api.addHouse(data).subscribe((response: any) => {
          console.log(response)
      });
    
  }

  handleInteriorImage(event: any) {

    if(!event || !event.target || !event.target.files) {
      return;
    }

    this.getBase64(event, 'interiorImage');
  }

  handleExteriorImage(event: any) {

    if(!event || !event.target || !event.target.files) {
      return;
    }

    this.getBase64(event, 'exteriorImage');
  }

  getBase64(event:any, name: any) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    var self = this;

    if(!this.images) {
      this.images = {};
    }

    reader.onload = function () {
      self.images[name] = reader.result;
    }
    reader.onerror = function (error) {
    };
 }

}
