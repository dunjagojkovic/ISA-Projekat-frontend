import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-report-house-owner',
  templateUrl: './report-house-owner.component.html',
  styleUrls: ['./report-house-owner.component.css']
})
export class ReportHouseOwnerComponent implements OnInit {

  financeBox : boolean = false;
  reservationsBox : boolean = true;
  yearBox: boolean = true;
  monthBox: boolean = false;
  weekBox: boolean = false;

  user: any = {} as any;
  reservations = [] as any;
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
  houses: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.loadHouse().subscribe((response:any) => {
      this.houses = response;
  });
    this.api.current().subscribe((response:any) => {
      this.user = response;      

      let data = {
        ownerId: this.user.id
      }
    
      this.api.getReservationsForCharts(data).subscribe((response:any) => {
        this.reservations = response;
        console.log(response);
        this.applyYear();
        this.applyMonth();
        this.applyWeek();
      });
  });
}


  applyYear = () => {
    let dataM = [0,0,0,0,0,0,0,0,0,0,0,0]
      for(let reservation of this.reservations) {
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

  applyMonth = () => {
    console.log(`Selected year is ${this.selectedYear} and month is ${this.selectedMonth}`);
    const monthIndex = this.months.findIndex(i => i == this.selectedMonth) + 1;
    const filterString = `${this.selectedYear}-${monthIndex < 10 ? '0': ''}${monthIndex}`;
    console.log(filterString);
    const months31 = [1,3,5,7,8,10,12];
    const numberOfDays = months31.includes(monthIndex) ? 31 : (monthIndex == 2 ? 28 : 30);
    let monthlyDaysCount = new Array(numberOfDays).fill(0);
    for(let reservation of this.reservations ){
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

  applyWeek = () => {
    this.startDate.setHours(0);
    this.startDate.setMinutes(0);
    this.startDate.setSeconds(0);
    const endDate = new Date(new Date().setDate(this.startDate.getDate() + 7));
    let daysCount = new Array(7).fill(0);
    const one_day = 1000 * 60 * 60 * 24;

    for(let reservation of this.reservations){
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
