import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';
import { LatLngLiteral } from '@agm/core';


@Component({
  selector: 'app-homepage-house-owner',
  templateUrl: './homepage-house-owner.component.html',
  styleUrls: ['./homepage-house-owner.component.css']
})
export class HomepageHouseOwnerComponent implements OnInit {
  form: FormGroup;
  form1: FormGroup;
  homes: any;
  addHouseBox : boolean = false;
  user: any = {} as any;
  latitude: any;
  longitude: any;
  lat = 44.62049751048226;
  lon = 20.50303520932738;

  constructor(
    private formBuilder : FormBuilder,
    private router: Router,
    private api: ApiService,
    private _snackBar: MatSnackBar
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
        extraService: ['', Validators.required],
        extraPrice: ['', Validators.required]
      })

      this.form1 = this.formBuilder.group({
        searchTerm: ['']       
      })
    }

  images: any;

  ngOnInit(): void {
    this.api.loadHouse().subscribe((response:any) => {
        this.homes = response;
    });

    this.api.current().subscribe((response:any) => {
      this.user = response;
  });
  }

  onDelete(id: number) {
    this.api.deleteMyHouse(id).subscribe((response:any) => {
     // this.homes = this.homes.filter((e:any) => e.id != id);
     this.homes = response;
     if(response == true){
      // this.houseReservations = this.houseReservations.filter((e:any) => e.id != id);  
      window.location.reload();
    } else if( response === false){
        alert("Can't delete")
    }
  });
  }

  onSubmit() {

      console.log('test')

      const name = this.form.get('name')?.value;
      const address = this.form.get('address')?.value;
      const numberOfRooms = this.form.get('numberOfRooms')?.value;
      const numberOfBeds = this.form.get('numberOfBeds')?.value;
      const promoDescription = this.form.get('promoDescription')?.value;
      const pricelist = this.form.get('pricelist')?.value;
      const behaviourRules = this.form.get('behaviourRules')?.value;
      const extraService = this.form.get('extraService')?.value;
      const extraPrice = this.form.get('extraPrice')?.value;

      let data = {
        name: name,
        address: address,
        numberOfRooms: numberOfRooms,
        numberOfBeds: numberOfBeds,
        promoDescription: promoDescription,
        pricelist: pricelist,
        behaviourRules: behaviourRules,
        extraService: extraService,
        extraPrice: extraPrice,
        interiorImage: this.images['interiorImage'],
        exteriorImage: this.images['exteriorImage'],
        latitude: this.latitude,
        longitude: this.longitude
      }

      this.api.addHouse(data).subscribe((response: any) => {
          console.log(response)
      });

      location.reload();
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

 onSearch(){
  const searchTerm = this.form1.get('searchTerm')?.value;

  let data = {
    searchTerm: searchTerm   
  }

  this.api.filterHouses(data).subscribe((response: any) => {
    console.log(response);
    this.homes = response;
  });
}

logout(): void{
  localStorage.clear();
}

changePickupMarkerLocation($event: { coords:LatLngLiteral}) {
  this.latitude=$event.coords.lat;
  this.longitude=$event.coords.lng;
}

}
