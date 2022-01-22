import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { id } from 'date-fns/locale';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { LatLngLiteral } from '@agm/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edithouse-house-owner',
  templateUrl: './edithouse-house-owner.component.html',
  styleUrls: ['./edithouse-house-owner.component.css']
})
export class EdithouseHouseOwnerComponent implements OnInit {
  form: FormGroup;
  user: any = {} as any;
  home: any;
  latitude: any;
  longitude: any;
  id: any;
  lat = 44.62049751048226;
  lon = 20.50303520932738;
  images: any;

  constructor(
    private formBuilder : FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService   
  ) { 

    this.route.queryParams
      .subscribe(params => {
        this.id = params.id;
      }
    );

    this.form = this.formBuilder.group({
      name: [''],
      address: [''],
      promoDescription: [''],
      numberOfRooms: [''],
      numberOfBeds: [''],
      behaviourRules: [''],
      pricelist: [''],
      extraService: [''],
      extraPrice: [''],
      longitude: [''],
      latitude: ['']
    });

    this.images = {}
  }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;
  });

  this.api.loadOneHouse(this.id).subscribe((response:any) => {
    this.home = response;
    console.log(response)

    this.form.setValue({
      name: this.home.name, 
      address: this.home.address,
      promoDescription: this.home.promoDescription,
      numberOfRooms: this.home.numberOfRooms,
      numberOfBeds: this.home.numberOfBeds,
      behaviourRules: this.home.behaviourRules,
      pricelist: this.home.pricelist,
      extraService: this.home.extraService,
      extraPrice: this.home.extraPrice,
      longitude: this.home.longitude,
      latitude: this.home.latitude
    });
    this.longitude = this.home.longitude;
    this.latitude = this.home.latitude;
  });
  }

  onSave(){
    const name = this.form.get('name')?.value;
      const address = this.form.get('address')?.value;
      const numberOfRooms = this.form.get('numberOfRooms')?.value;
      const numberOfBeds = this.form.get('numberOfBeds')?.value;
      const promoDescription = this.form.get('promoDescription')?.value;
      const pricelist = this.form.get('pricelist')?.value;
      const behaviourRules = this.form.get('behaviourRules')?.value;
      const extraService = this.form.get('extraService')?.value;
      const extraPrice = this.form.get('extraPrice')?.value;
      const longitude = this.longitude;
      const latitude = this.latitude;

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
        longitude: longitude,
        latitude: latitude,
        exteriorImage: this.images['exteriorImage'],
        interiorImage: this.images['interiorImage']
      }

    this.api.editHouse(this.id, data).subscribe((response:any) => {
      this.home = response;
      if( response != null){
        this.router.navigate(['/home-house-owner']);
      } else if(response == null){
        alert(" Can't edit, the house is reserved.")
      }
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

 changePickupMarkerLocation($event: { coords:LatLngLiteral}) {
  this.latitude=$event.coords.lat;
  this.longitude=$event.coords.lng;
}

 logout(): void{
  localStorage.clear();
}
}
