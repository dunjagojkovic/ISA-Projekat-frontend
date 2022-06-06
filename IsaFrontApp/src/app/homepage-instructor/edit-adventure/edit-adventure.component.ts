import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { id } from 'date-fns/locale';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { isThursday } from 'date-fns';

@Component({
  selector: 'app-edit-adventure',
  templateUrl: './edit-adventure.component.html',
  styleUrls: ['./edit-adventure.component.css']
})
export class EditAdventureComponent implements OnInit {
  form: FormGroup;
  user: any = {} as any;
  adventure: any;
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
      instructorBiography: [''],
      maxNumberOfPeople: [''],
      behaviourRules: [''],
      fishingEquipment: [''],
      pricelist: [''],
      extraService: [''],
      extraPrice: [''],
      cancelConditions: ['']
    });

    this.images = {}
  }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;
  });

  this.api.loadOneAdventure(this.id).subscribe((response:any) => {
    this.adventure = response;

    this.form.setValue({
      name: this.adventure.name, 
      address: this.adventure.address,
      promoDescription: this.adventure.promoDescription,
      instructorBiography: this.adventure.instructorBiography,
      maxNumberOfPeople: this.adventure.maxNumberOfPeople,
      behaviourRules: this.adventure.behaviourRules,
      fishingEquipment: this.adventure.fishingEquipment,
      pricelist: this.adventure.pricelist,
      extraService: this.adventure.extraService,
      extraPrice: this.adventure.extraPrice,
      cancelConditions: this.adventure.cancelConditions
    });
  });
  }

  onSave(){
    const name = this.form.get('name')?.value;
      const address = this.form.get('address')?.value;
      const promoDescription = this.form.get('promoDescription')?.value;
      const instructorBiography = this.form.get('instructorBiography')?.value;
      const maxNumberOfPeople = this.form.get('maxNumberOfPeople')?.value;
      const behaviourRules = this.form.get('behaviourRules')?.value;
      const fishingEquipment = this.form.get('fishingEquipment')?.value;
      const pricelist = this.form.get('pricelist')?.value;
      const extraService = this.form.get('extraService')?.value;
      const extraPrice = this.form.get('extraPrice')?.value;
      const cancelConditions = this.form.get('cancelConditions')?.value;      

      let data = {
        name: name,
        address: address,
        promoDescription: promoDescription,
        instructorBiography: instructorBiography,
        maxNumberOfPeople: maxNumberOfPeople,
        behaviourRules: behaviourRules,
        fishingEquipment: fishingEquipment,
        pricelist: pricelist,
        extraService: extraService,
        extraPrice: extraPrice,
        cancelConditions: cancelConditions,
        ambientImage: this.images['ambientImage'],
        id: parseInt(this.adventure.id)
      }

    this.api.editAdventure(this.id, data).subscribe((response:any) => {
      this.adventure = response;
      if( response != null){
        this.router.navigate(['/homepage-instructor']);
      } else if(response == null){
        alert(" Can't edit")
      }
  });
  }
 
  
  handleAmbientImage(event: any) {

    if(!event || !event.target || !event.target.files) {
      return;
    }

    this.getBase64(event, 'ambientImage');
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
