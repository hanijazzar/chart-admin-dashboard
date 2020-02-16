import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public pieChartFields = null;
  public barChartFields = null;


  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
   this.getUsersPaymentMethodNumbersOnly();
   this.getRevenuePerYear();
  }

  getUsersPaymentMethodNumbersOnly() {

    this.dataService.getUsersPaymentMethodNumbersOnly().subscribe(res => {
      this.pieChartFields = {
        id: 1,
        labels : ['Credit Card', 'Cash', 'PayPal'],
        data : res,
        datasets : '',
        options: '',
        type : 'pie',
      };
    
    });
  }

  getRevenuePerYear() {
    this.dataService.getRevenuePerYear().subscribe(res => {
    
      this.barChartFields = {
        id: 2,
        labels : ['2019', '2018', '2017'],
        data: '',
        datasets : res,
        legend: true,
        type : 'bar',
        options: {
          scaleShowVerticalLines: false,
          responsive: true
        }
      };
    });

  }

  goToChartDetails(id) {
    this.router.navigate(['/chart-details', id]);
  }

}
