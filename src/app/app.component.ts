import { Component } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public selectedTime = '18:33';

name = new FormControl();
  title = 'app';
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['10', '20', '30', '40', '50', '59'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [95, 73.51, 180, 81, 56,  200.81], label: 'MSFT'},
    {data: [28, 173, 140, 19, 86, 246.81], label: 'SPY'},
    {data: [78, 165, 170, 19, 86, 180.81], label: 'C'}
  ];

  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
   
  }
}
