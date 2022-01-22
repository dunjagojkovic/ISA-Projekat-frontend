import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-report-instructor',
  templateUrl: './report-instructor.component.html',
  styleUrls: ['./report-instructor.component.css']
})
export class ReportInstructorComponent implements OnInit {

  user: any = {} as any;
  reservations = [] as any;

  type = 'line';
  dataMonth:any;
  dataYear: any;
  dataWeek: any;
  options = {
  responsive: true,
  maintainAspectRatio: false
};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;      
      console.log(response);

      let data = {
        instructorId: this.user.id
      }
    
      this.api.getReservationsForCharts(data).subscribe((response:any) => {
        this.reservations = response;
        let dataM = [0,0,0,0,0,0,0,0,0,0,0,0]
        let dataW = []
        let dataWL = []

        for(let i = 0; i < 53; i++) {
          dataW.push(0)
          dataWL.push(i)
        }

        for(let reservation of this.reservations) {

          let startDate = new Date(reservation.startDate)
          
          console.log(startDate.getMonth())
          dataM[startDate.getMonth()] = dataM[startDate.getMonth()] + 1;

          let week = this.getWeekNumber(startDate);

          dataW[week - 1] = dataW[week - 1] + 1;
          
        }

        this.dataMonth = {
          labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [
            {
              label: "By month",
              data: dataM
            }
          ]
        };

        this.dataYear = {
          labels: ["2021", "2022", "2023"],
          datasets: [
            {
              label: "By month",
              data: [15, this.reservations.length, 0]
            }
          ]
        };

        this.dataWeek = {
          labels: dataWL,
          datasets: [
            {
              label: "By week",
              data: dataW
            }
          ]
        };


        dataW
        this.reservations = response;
      });
  });



  }

  logout(): void{
    localStorage.clear();
  }

  getWeekNumber(d: Date): number {
    // Copy date so don't modify original
    d = new Date(+d);
    d.setHours(0, 0, 0);
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    // Get first day of year
    var yearStart = new Date(d.getFullYear(), 0, 1);
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil((((d.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
    // Return array of year and week number
    return weekNo;
}

}
