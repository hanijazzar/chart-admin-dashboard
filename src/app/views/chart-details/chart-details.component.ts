import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-chart-details',
  templateUrl: './chart-details.component.html',
  styleUrls: ['./chart-details.component.scss']
})
export class ChartDetailsComponent implements OnInit {

  id: number;
  private sub: any;
  chart: any;

  table: any = null;
  
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      if (this.id == 1) {
        this.getUsersPaymentMethodNumbersOnly();
        this.getUsersPaymentMethod();
      } else if (this.id == 2) {
        this.getRevenuePerYear();
      }

   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  getUsersPaymentMethodNumbersOnly() {
    this.dataService.getUsersPaymentMethodNumbersOnly().subscribe(res => {
      this.chart = {
        id: 1,
        labels : ['Credit Card', 'Cash', 'PayPal'],
        data : res,
        datasets: '',
        options: '',
        type : 'pie'
      };
    
    });
  }

  getUsersPaymentMethod() {
    this.dataService.getUsersPaymentMethod().subscribe(res => {
      this.table = {
        headers: ['Method', 'Name'],
        rows: res
      };
    
    });
  }

  getRevenuePerYear() {

    this.dataService.getRevenuePerYear().subscribe(res => {

      this.chart = {
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
      let tableData = [];

      res.forEach(el => {
        tableData.push({
          first: `${el['data'][0]}`,
          second: `${el['data'][1]}`,
          third: `${el['data'][2]}`,
        })
      });

      this.table = {
        headers: ['2019', '2018', '2017'],
        rows: tableData
      };

    });
  }

}
