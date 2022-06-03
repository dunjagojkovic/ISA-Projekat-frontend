import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-business-report',
  templateUrl: './business-report.component.html',
  styleUrls: ['./business-report.component.css']
})
export class BusinessReportComponent implements OnInit {

  adventureBox: boolean= true;
  homeBox : boolean = false;
  boatBox : boolean = false;
  percantageBox: boolean=false;
  financeBox : boolean = false;
  reservationsBox : boolean = true;
  yearBox: boolean = true;
  monthBox: boolean = false;
  weekBox: boolean = false;
  form: FormGroup;

  user: any = {} as any;
  instructorId : any;
  ownerId: any;
  homeOwnerId: any;
  adventureReservations = [] as any;
  boatReservations = [] as any;
  homeReservations = [] as any;
  startDate = new Date();
  selectedMonth = "January";
  selectedYear = "2022";
  type = 'line';
  dataMonth:any;
  dataYear: any;
  dataWeek: any;
  months:string[] =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  years:string[] = ["2021", "2022", "2023"]
  options = { responsive: true, maintainAspectRatio: false };
  chartType = 'bar';
  adventures: any;
  boats: any;
  homes : any;
  incomes : any;
  percentage : any;
  startCountPeriod = new Date();
  endCountPeriod = new Date();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private formBuilder : FormBuilder
  ) {
    this.form = this.formBuilder.group({

      percentage: ['', Validators.minLength(1)]

    })
   }

   savePercentage() {

    const percentage = this.form.get('percentage')?.value;
  

    let data = {

      percentage: percentage
    
    }

    this.api.addIncome(data).subscribe((response: any) => {
      console.log(response);
      
    });
  }

  ngOnInit(): void {
    this.api. loadIstructorsForClients().subscribe((response:any) => {
      this.adventures = response;
    });
    this.api.current().subscribe((response:any) => {
      this.user = response;      

      let data = {
        instructorId : this.instructorId
      }
    
      this.api.getAllAdventureReservationsForCharts(data).subscribe((response:any) => {
        this.adventureReservations = response;
        console.log(response);
        this.applyYear();
        this.applyMonth();
        this.applyWeek();        
      });
  });
}

onBoats(): void {
  this.api.loadBoatsForClients().subscribe((response:any) => {
    this.boats = response;
});
  this.api.current().subscribe((response:any) => {
    this.user = response;   
    
    let data = {
      ownerId: this.ownerId
    }
  
    this.api.getAllBoatReservationsForCharts(data).subscribe((response:any) => {
      this.boatReservations = response;
      console.log(response);
      this.applyBoatYear();
      this.applyBoatMonth();
      this.applyBoatWeek();
    });
  });
}

onHomes(): void {
  this.api.loadHousesForClients().subscribe((response:any) => {
    this.homes = response;
});
  this.api.current().subscribe((response:any) => {
    this.user = response;   
    
    let data = {
      homeOwnerId: this.homeOwnerId
    }
  
    this.api.getHomeReservationsForCharts(data).subscribe((response:any) => {
      this.homeReservations = response;
      console.log(response);
      this.applyHomeYear();
      this.applyHomeMonth();
      this.applyHomeWeek();
    });
  });
}

  getDateString = (date: Date):string => {
    const month = date.getMonth();
    return `${date.getFullYear()}-${month < 10 ? '0': ''}${date.getMonth()}-${date.getDate()}`;
  }

  applyCountIncome = () => {
    this.api.getAllIncomes().subscribe((response:any) => {
      this.incomes = response;
    });
    const adventureReservations  = [...this.adventureReservations ];
    for(let adventure of this.adventures){
      adventure.totalIncome = 0;
      adventure.totalReservations = 0;
      for(let adventureReservations  of this.adventureReservations ){
        for(let income of this.incomes){
        const reservationDate = new Date(adventureReservations .startDate)
          if(this.startCountPeriod <= reservationDate && reservationDate <= this.endCountPeriod && adventureReservations .adventureProfile.id == adventure.id){
            if(!adventure?.totalIncome) adventure.totalIncome = 0;
            adventure.totalIncome += adventureReservations .price*income.percentage/100;
            if(!adventure?.totalReservations) adventure.totalReservations = 0;
            adventure.totalReservations ++;
          }
        }
      }
    }
    console.log(this.adventures);
  }

  applyYear = () => {
    let dataM = [0,0,0,0,0,0,0,0,0,0,0,0]
      for(let adventureReservation of this.adventureReservations ) {
          let startDate = new Date(adventureReservation .startDate)
          console.log(startDate.getMonth())
          dataM[startDate.getMonth()] = dataM[startDate.getMonth()] + 1;
        }
        this.dataMonth = {
          labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [
            {
              label: "By year",
              data: dataM
            }
          ]};
  }

  applyMonth = () => {
    console.log(`Selected year is ${this.selectedYear} and month is ${this.selectedMonth}`);
    const monthIndex = this.months.findIndex(i => i == this.selectedMonth) + 1;
    const filterString = `${this.selectedYear}-${monthIndex < 10 ? '0': ''}${monthIndex}`;
    console.log(filterString);
    const months31 = [1,3,5,7,8,10,12];
    const numberOfDays = months31.includes(monthIndex) ? 31 : (monthIndex == 2 ? 28 : 30);
    let monthlyDaysCount = new Array(numberOfDays).fill(0);
    for(let adventureReservation of this.adventureReservations  ){
      if(adventureReservation?.startDate?.includes(filterString)){
        // reservacija u tom mesecu
        const date = new Date(adventureReservation?.startDate);
        monthlyDaysCount[date.getDate()-1]++
      }
    }
    this.dataYear = {
      labels: monthlyDaysCount.map((e,i) => i + 1),
      datasets: [
        {
          label: "By month",
          data: monthlyDaysCount
        }
      ]};    
  }

  applyWeek = () => {
    this.startDate.setHours(0);
    this.startDate.setMinutes(0);
    this.startDate.setSeconds(0);
    const endDate = new Date(new Date().setDate(this.startDate.getDate() + 7));
    let daysCount = new Array(7).fill(0);
    const one_day = 1000 * 60 * 60 * 24;

    for(let adventureReservation  of this.adventureReservations ){
      const reservationDate = new Date(adventureReservation.startDate)
      if(this.startDate < reservationDate && reservationDate < endDate ){
        const index =(reservationDate.getTime() - this.startDate.getTime())/one_day;
        daysCount[index]++;
      }
    }
    const days = ["Sun","Mon", "Tue", "Wed", "Thu","Fri", "Sat"];
    const initDate = new Date(this.startDate);
    this.dataWeek = {
      labels: daysCount.map((e,i) => {
        const date = new Date(new Date().setDate(initDate.getDate() + i))
        return days[date.getDay()];
      }),
      datasets: [
        {
          label: "By week",
          data: daysCount
        }
      ]};    
  }

  applyHomeCountIncome = () => {
    this.api.getAllIncomes().subscribe((response:any) =>{
      this.incomes = response;
    });
    const homeReservations = [...this.homeReservations];
    for(let home of this.homes){
      home.totalIncome = 0;
      home.totalReservations = 0;
      for(let reservation of this.homeReservations){
        for(let income of this.incomes){
        const reservationDate = new Date(reservation.startDate)
          if(this.startCountPeriod <= reservationDate && reservationDate <= this.endCountPeriod && reservation.homeProfile.id == home.id){
            if(!home?.totalIncome) home.totalIncome = 0;
            home.totalIncome += reservation.price*income.percentage/100;
            if(!home?.totalReservations) home.totalReservations = 0;
            home.totalReservations ++;
          }
          }
      }
    }
    console.log(this.boats);
  }

  applyHomeYear = () => {
    let dataM = [0,0,0,0,0,0,0,0,0,0,0,0]
      for(let reservation of this.homeReservations) {
          let startDate = new Date(reservation.startDate)
          console.log(startDate.getMonth())
          dataM[startDate.getMonth()] = dataM[startDate.getMonth()] + 1;
        }
        this.dataMonth = {
          labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [
            {
              label: "By year",
              data: dataM
            }
          ]};
  }

  applyHomeMonth = () => {
    console.log(`Selected year is ${this.selectedYear} and month is ${this.selectedMonth}`);
    const monthIndex = this.months.findIndex(i => i == this.selectedMonth) + 1;
    const filterString = `${this.selectedYear}-${monthIndex < 10 ? '0': ''}${monthIndex}`;
    console.log(filterString);
    const months31 = [1,3,5,7,8,10,12];
    const numberOfDays = months31.includes(monthIndex) ? 31 : (monthIndex == 2 ? 28 : 30);
    let monthlyDaysCount = new Array(numberOfDays).fill(0);
    for(let reservation of this.homeReservations ){
      if(reservation?.startDate?.includes(filterString)){
        // reservacija u tom mesecu
        const date = new Date(reservation?.startDate);
        monthlyDaysCount[date.getDate()-1]++
      }
    }
    this.dataYear = {
      labels: monthlyDaysCount.map((e,i) => i + 1),
      datasets: [
        {
          label: "By month",
          data: monthlyDaysCount
        }
      ]};    
  }

  applyHomeWeek = () => {
    this.startDate.setHours(0);
    this.startDate.setMinutes(0);
    this.startDate.setSeconds(0);
    const endDate = new Date(new Date().setDate(this.startDate.getDate() + 7));
    let daysCount = new Array(7).fill(0);
    const one_day = 1000 * 60 * 60 * 24;

    for(let reservation of this.homeReservations){
      const reservationDate = new Date(reservation.startDate)
      if(this.startDate < reservationDate && reservationDate < endDate ){
        const index =(reservationDate.getTime() - this.startDate.getTime())/one_day;
        daysCount[index]++;
      }
    }
    const days = ["Sun","Mon", "Tue", "Wed", "Thu","Fri", "Sat"];
    const initDate = new Date(this.startDate);
    this.dataWeek = {
      labels: daysCount.map((e,i) => {
        const date = new Date(new Date().setDate(initDate.getDate() + i))
        return days[date.getDay()];
      }),
      datasets: [
        {
          label: "By week",
          data: daysCount
        }
      ]};    
  }


  applyBoatCountIncome = () => {
    this.api.getAllIncomes().subscribe((response:any) =>{
      this.incomes = response;
    });
    const boatReservations = [...this.boatReservations];
    for(let boat of this.boats){
      boat.totalIncome = 0;
      boat.totalReservations = 0;
      for(let reservation of this.boatReservations){
        for(let income of this.incomes){
        const reservationDate = new Date(reservation.startDate)
          if(this.startCountPeriod <= reservationDate && reservationDate <= this.endCountPeriod && reservation.boatProfile.id == boat.id){
            if(!boat?.totalIncome) boat.totalIncome = 0;
            boat.totalIncome += reservation.price*income.percentage/100;
            if(!boat?.totalReservations) boat.totalReservations = 0;
            boat.totalReservations ++;
          }
          }
      }
    }
    console.log(this.boats);
  }

  applyBoatYear = () => {
    let dataM = [0,0,0,0,0,0,0,0,0,0,0,0]
      for(let reservation of this.boatReservations) {
          let startDate = new Date(reservation.startDate)
          console.log(startDate.getMonth())
          dataM[startDate.getMonth()] = dataM[startDate.getMonth()] + 1;
        }
        this.dataMonth = {
          labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [
            {
              label: "By year",
              data: dataM
            }
          ]};
  }

  applyBoatMonth = () => {
    console.log(`Selected year is ${this.selectedYear} and month is ${this.selectedMonth}`);
    const monthIndex = this.months.findIndex(i => i == this.selectedMonth) + 1;
    const filterString = `${this.selectedYear}-${monthIndex < 10 ? '0': ''}${monthIndex}`;
    console.log(filterString);
    const months31 = [1,3,5,7,8,10,12];
    const numberOfDays = months31.includes(monthIndex) ? 31 : (monthIndex == 2 ? 28 : 30);
    let monthlyDaysCount = new Array(numberOfDays).fill(0);
    for(let reservation of this.boatReservations ){
      if(reservation?.startDate?.includes(filterString)){
        // reservacija u tom mesecu
        const date = new Date(reservation?.startDate);
        monthlyDaysCount[date.getDate()-1]++
      }
    }
    this.dataYear = {
      labels: monthlyDaysCount.map((e,i) => i + 1),
      datasets: [
        {
          label: "By month",
          data: monthlyDaysCount
        }
      ]};    
  }

  applyBoatWeek = () => {
    this.startDate.setHours(0);
    this.startDate.setMinutes(0);
    this.startDate.setSeconds(0);
    const endDate = new Date(new Date().setDate(this.startDate.getDate() + 7));
    let daysCount = new Array(7).fill(0);
    const one_day = 1000 * 60 * 60 * 24;

    for(let reservation of this.boatReservations){
      const reservationDate = new Date(reservation.startDate)
      if(this.startDate < reservationDate && reservationDate < endDate ){
        const index =(reservationDate.getTime() - this.startDate.getTime())/one_day;
        daysCount[index]++;
      }
    }
    const days = ["Sun","Mon", "Tue", "Wed", "Thu","Fri", "Sat"];
    const initDate = new Date(this.startDate);
    this.dataWeek = {
      labels: daysCount.map((e,i) => {
        const date = new Date(new Date().setDate(initDate.getDate() + i))
        return days[date.getDay()];
      }),
      datasets: [
        {
          label: "By week",
          data: daysCount
        }
      ]};    
  }

  logout(): void{
    localStorage.clear();
  }

}
