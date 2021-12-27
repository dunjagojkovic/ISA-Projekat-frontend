import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { id } from 'date-fns/locale';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
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
  id: any;

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
      extraService: ['']
    });
  }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;
  });

  this.api.loadOneHouse(this.id).subscribe((response:any) => {
    this.home = response;

    this.form.setValue({
      name: this.home.name, 
      address: this.home.address,
      promoDescription: this.home.promoDescription,
      numberOfRooms: this.home.numberOfRooms,
      numberOfBeds: this.home.numberOfBeds,
      behaviourRules: this.home.behaviourRules,
      pricelist: this.home.pricelist,
      extraService: this.home.extraService
    });
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

      let data = {
        name: name,
        address: address,
        numberOfRooms: numberOfRooms,
        numberOfBeds: numberOfBeds,
        promoDescription: promoDescription,
        pricelist: pricelist,
        behaviourRules: behaviourRules,
        extraService: extraService
      }

    this.api.editHouse(this.id, data).subscribe((response:any) => {
      this.router.navigate(['/home-house-owner']);
  });
  }
}
