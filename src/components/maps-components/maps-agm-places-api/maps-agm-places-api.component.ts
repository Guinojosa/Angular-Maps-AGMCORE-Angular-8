
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'maps-agm-places-api',
  templateUrl: './maps-agm-places-api.component.html',
  styleUrls: ['./maps-agm-places-api.component.scss']
})
export class MapsAgmPlacesApiComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;
  types: string[] = ["address"];

  @ViewChild('search', { static: true })
  public searchRef: ElementRef;

  constructor(private mapsAPI: MapsAPILoader, private ngZone: NgZone) {}

  ngOnInit() {
    this.loadPlacesApi();
  }

  private loadPlacesApi(){
    this.mapsAPI.load().then(() => {
      this.currentLocation();
      let autocomplete = new google.maps.places.Autocomplete(this.searchRef.nativeElement, {
        types: this.types
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 18;
        });
      });
    });
  }

  private currentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 18;
      });
    }
  }  

  changeTypeSearch(typeSearch){
    this.types = [typeSearch]  ;
    this.loadPlacesApi();
  }
}
