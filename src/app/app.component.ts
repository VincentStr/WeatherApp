import { Component, OnInit } from '@angular/core';
import { WheaterData } from './models/weather.model';
import { WeatherService } from './services/weather.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private wheaterService: WeatherService){

  }
  cityName: string = "Ulm";
  wheaterData?: WheaterData
 

  ngOnInit(): void {
    this.getWeatherData(this.cityName)
    this.cityName ="";
   
  }
  onSubmit(){
    this.getWeatherData(this.cityName)
    this.cityName ="";
  }
  private getWeatherData (cityName: string) {
    this.wheaterService.getWeatherData(cityName)
    .subscribe({
      next: (repsonse) =>{
        this.wheaterData = repsonse
        console.log(this.wheaterData)
      }
    })
  }
}
