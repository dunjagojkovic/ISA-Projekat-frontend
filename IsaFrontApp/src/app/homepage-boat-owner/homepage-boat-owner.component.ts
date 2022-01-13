import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { LatLngLiteral } from '@agm/core';

@Component({
  selector: 'app-homepage-boat-owner',
  templateUrl: './homepage-boat-owner.component.html',
  styleUrls: ['./homepage-boat-owner.component.css']
})
export class HomepageBoatOwnerComponent implements OnInit {
  form: FormGroup;
  form1: FormGroup;
  boats: any;
  addBoatBox : boolean = false;
  user: any = {} as any;
  images: any;
  latitude: any;
  longitude: any;
  lat = 44.62049751048226;
  lon = 20.50303520932738;

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

      this.form1 = this.formBuilder.group({
        searchTerm: ['']       
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

  onSubmit() {

    const name = this.form.get('name')?.value;
    const address = this.form.get('address')?.value;
    const promoDescription = this.form.get('promoDescription')?.value;
    const pricelist = this.form.get('pricelist')?.value;
    const behaviourRules = this.form.get('behaviourRules')?.value;
    const extraService = this.form.get('extraService')?.value;
    const extraPrice = this.form.get('extraPrice')?.value;
    const type = this.form.get('type')?.value;
    const maxSpeed = this.form.get('maxSpeed')?.value;
    const enginePower = this.form.get('enginePower')?.value;
    const engineNumber = this.form.get('engineNumber')?.value;
    const capacity = this.form.get('capacity')?.value;
    const length = this.form.get('length')?.value;
    const cancelConditions = this.form.get('cancelConditions')?.value;
    const navEquipment = this.form.get('navEquipment')?.value;
    const fishingEquipment = this.form.get('fishingEquipment')?.value;

    let data = {
      name: name,
      address: address,
      promoDescription: promoDescription,
      pricelist: pricelist,
      behaviourRules: behaviourRules,
      extraService: extraService,
      extraPrice: extraPrice,
      type: type,
      maxSpeed: maxSpeed,
      enginePower: enginePower,
      engineNumber: engineNumber,
      capacity: capacity,
      length: length,
      cancelConditions: cancelConditions,
      navEquipment: navEquipment,
      fishingEquipment: fishingEquipment,
      interiorImage: this.images['interiorImage'],
      exteriorImage: this.images['exteriorImage'],
      latitude: this.latitude,
      longitude: this.longitude
    }

    this.api.addBoat(data).subscribe((response: any) => {
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

  this.api.filterBoats(data).subscribe((response: any) => {
    console.log(response);
    this.boats = response;
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
