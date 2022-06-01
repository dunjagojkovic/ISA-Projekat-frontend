import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-homepage-instructor',
  templateUrl: './homepage-instructor.component.html',
  styleUrls: ['./homepage-instructor.component.css']
})
export class HomepageInstructorComponent implements OnInit {

  form: FormGroup;
  form1: FormGroup;
  adventures: any;
  addAdventureBox : boolean = false;
  user: any = {} as any;

  constructor( private formBuilder : FormBuilder,
    private router: Router,
    private api: ApiService,
    private _snackBar: MatSnackBar) {

      this.adventures = [];

      this.form = this.formBuilder.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        promoDescription: ['', Validators.required],
        instructorBiography: ['', Validators.required],
        maxNumberOfPeople: ['', Validators.required],
        behaviourRules: ['', Validators.required],
        fishingEquipment: ['', Validators.required],
        pricelist: ['', Validators.required],
        extraService: ['', Validators.required],
        cancelConditions: ['', Validators.required]
      })

      this.form1 = this.formBuilder.group({
        searchTerm: ['']       
      })
    }

  images: any;

  ngOnInit(): void {
    this.api.loadAdventure().subscribe((response:any) => {
        this.adventures = response;
    });

    this.api.current().subscribe((response:any) => {
      this.user = response;
  });
  }

  onDelete(id: number) {
    this.api.deleteMyAdventure(id).subscribe((response:any) => {
    
     this.adventures = response;
     if(response == true){
     
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
      const promoDescription = this.form.get('promoDescription')?.value;
      const instructorBiography = this.form.get('instructorBiography')?.value;
      const maxNumberOfPeople = this.form.get('maxNumberOfPeople')?.value;
      const behaviourRules = this.form.get('behaviourRules')?.value;
      const fishingEquipment = this.form.get('fishingEquipment')?.value;
      const pricelist = this.form.get('pricelist')?.value;
      const extraService = this.form.get('extraService')?.value;
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
        cancelConditions: cancelConditions,
        ambientImage: this.images['ambientImage']
        
      }

      this.api.addNewAdventure(data).subscribe((response: any) => {
          console.log(response)
      });

      location.reload();
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

 onSearch(){
  const searchTerm = this.form1.get('searchTerm')?.value;

  let data = {
    searchTerm: searchTerm   
  }

  this.api.filterInstructors(data).subscribe((response: any) => {
    console.log(response);
    this.adventures = response;
  });
}

}