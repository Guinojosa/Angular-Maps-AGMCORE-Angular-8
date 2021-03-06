import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { MapsAgmRoutingModule } from './maps-routing.module';
import { MapsComponent } from '././page/maps.component';
import { MapsAgmPlacesApiComponent } from 'src/app/components/maps-components/maps-agm-places-api/maps-agm-places-api.component';
import { MapsAgmSimpleComponent } from 'src/app/components/maps-components/maps-agm-simple/maps-agm-simple.component';
import { MapsAgmDraggableComponent } from 'src/app/components/maps-components/maps-agm-draggable/maps-agm-draggable.component';


@NgModule({
  declarations: [
    MapsComponent,
    MapsAgmSimpleComponent,
    MapsAgmPlacesApiComponent,
    MapsAgmDraggableComponent
  ],
  imports: [
    CommonModule,
    MapsAgmRoutingModule,   
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['places']
    })
  ]
})
export class MapsModule { }
