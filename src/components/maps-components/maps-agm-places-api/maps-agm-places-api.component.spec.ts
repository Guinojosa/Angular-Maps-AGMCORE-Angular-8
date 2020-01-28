import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsAgmPlacesApiComponent } from './maps-agm-places-api.component';

describe('MapsAgmPlacesApiComponent', () => {
  let component: MapsAgmPlacesApiComponent;
  let fixture: ComponentFixture<MapsAgmPlacesApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsAgmPlacesApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsAgmPlacesApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
