import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  usersPaymentMethod: Array<object> = [
    { name: 'Joseph', method: 'Credit Card'},
    { name: 'Hani', method: 'Credit Card'},
    { name: 'Tony', method: 'Cash'},
    { name: 'Max', method: 'Cash'},
    { name: 'Tom', method: 'Cash'},
    { name: 'John', method: 'PayPal'},
    { name: 'Daniel', method: 'Credit Card'},
    { name: 'Sami', method: 'Credit Card' }
  ];

  revenuePerYear: Array<object> = [
    {data: [650, 590, 800], label: 'Community Management'},
    {data: [280, 480, 400], label: 'Space Management'},
    {data: [350, 290, 600], label: 'Workplace Management'},
  ];


  constructor() { }

  getUsersPaymentMethodNumbersOnly() {
    let countCreditCard = 0;
      let countCash = 0;
      let countPaypal = 0;
      
      this.usersPaymentMethod.forEach(el => {
        if (el['method'] == 'Credit Card') {
          countCreditCard++;
        } else if (el['method'] == 'Cash') {
          countCash++;
        }
        else if (el['method'] == 'PayPal') {
          countPaypal++;
        }
      });

    return of([countCreditCard, countCash, countPaypal]);
  }

  getUsersPaymentMethod() {
    return of(this.usersPaymentMethod);
  }

  getRevenuePerYear() {
    return of(this.revenuePerYear);
  }

}
