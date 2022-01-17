import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { id } from 'date-fns/locale';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editboat-boat-owner',
  templateUrl: './editboat-boat-owner.component.html',
  styleUrls: ['./editboat-boat-owner.component.css']
})
export class EditboatBoatOwnerComponent implements OnInit {

  form: FormGroup;
  user: any = {} as any;
  boat: any;
  id: any;
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
      type: [''],
      length: [''],
      behaviourRules: [''],
      pricelist: [''],
      extraService: [''],
      extraPrice: [''],
      engineNumber: [''],
      enginePower: [''],
      maxSpeed: [''],
      navEquipment: [''],
      capacity: [''],
      fishingEquipment: [''],
      cancelConditions: ['']
    });

    this.images = {}
  }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;
  });

  this.api.loadOneBoat(this.id).subscribe((response:any) => {
    this.boat = response;

    this.form.setValue({
      name: this.boat.name, 
      address: this.boat.address,
      promoDescription: this.boat.promoDescription,
      type: this.boat.type,
      length: this.boat.length,
      behaviourRules: this.boat.behaviourRules,
      pricelist: this.boat.pricelist,
      extraService: this.boat.extraService,
      extraPrice: this.boat.extraPrice,
      engineNumber: this.boat.engineNumber,
      enginePower: this.boat.enginePower,
      maxSpeed: this.boat.maxSpeed,
      navEquipment: this.boat.navEquipment,
      capacity: this.boat.capacity,
      fishingEquipment: this.boat.fishingEquipment,
      cancelConditions: this.boat.cancelConditions
    });
  });
  }

  onSave(){
      const name = this.form.get('name')?.value;
      const address = this.form.get('address')?.value;
      const type = this.form.get('type')?.value;
      const length = this.form.get('length')?.value;
      const promoDescription = this.form.get('promoDescription')?.value;
      const pricelist = this.form.get('pricelist')?.value;
      const behaviourRules = this.form.get('behaviourRules')?.value;
      const extraService = this.form.get('extraService')?.value;
      const extraPrice = this.form.get('extraPrice')?.value;
      const engineNumber = this.form.get('engineNumber')?.value;
      const enginePower = this.form.get('enginePower')?.value;
      const maxSpeed = this.form.get('maxSpeed')?.value;
      const navEquipment = this.form.get('navEquipment')?.value;
      const capacity = this.form.get('capacity')?.value;
      const fishingEquipment = this.form.get('fishingEquipment')?.value;
      const cancelConditions = this.form.get('cancelConditions')?.value;

      let data = {
        name: name,
        address: address,
        type: type,
        length: length,
        promoDescription: promoDescription,
        pricelist: pricelist,
        behaviourRules: behaviourRules,
        extraService: extraService,
        extraPrice: extraPrice,
        engineNumber: engineNumber,
        enginePower: enginePower,
        maxSpeed: maxSpeed,
        navEquipment: navEquipment,
        capacity: capacity,
        fishingEquipment: fishingEquipment,
        cancelConditions: cancelConditions,
        exteriorImage: this.images['exteriorImage'],
        interiorImage: this.images['interiorImage']
      }
      console.log(data);

    this.api.editBoat(this.id, data).subscribe((response:any) => {
      this.boat = response;
      if(response != null){
        this.router.navigate(['/home-boat-owner']);
      } else if(response == null){
        alert("Can't edit, the boat is reserved.")
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

 logout(): void{
  localStorage.clear();
}
}
