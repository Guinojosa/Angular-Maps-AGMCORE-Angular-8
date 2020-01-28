import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'maps-agm',
  templateUrl: './maps-agm-simple.component.html',
  styleUrls: ['./maps-agm-simple.component.scss']
})
export class MapsAgmSimpleComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;

  constructor() { }

  ngOnInit() {
    this.currentLocation();
  }

  currentLocation(){
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 18;
        });
    }
  }

}
