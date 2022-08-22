import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
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
  WeatherData?: WeatherData
 

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
        this.WeatherData = repsonse
        console.log(this.WeatherData)
      }
    })
  }
}
