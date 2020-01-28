import { Component, OnInit, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent as AGMMouseEvent } from '@agm/core';

@Component({
  selector: 'maps-agm-draggable',
  templateUrl: './maps-agm-draggable.component.html',
  styleUrls: ['./maps-agm-draggable.component.scss']
})
export class MapsAgmDraggableComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;

  constructor(private mapsAPI: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {
    this.mapsAPI.load().then(() => {
      this.currentLocation();
      this.geoCoder = new google.maps.Geocoder;
    });
  }

  private currentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getAddress(this.latitude, this.longitude);
        this.zoom = 18;
      });
    }
  }

  markerDragEnd($event: AGMMouseEvent) {
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }
 
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 18;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      } 
    });
  }

}
