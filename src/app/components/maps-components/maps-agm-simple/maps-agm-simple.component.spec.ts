import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsAgmSimpleComponent } from './maps-agm-simple.component';

describe('MapsAgmComponent', () => {
  let component: MapsAgmSimpleComponent;
  let fixture: ComponentFixture<MapsAgmSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsAgmSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsAgmSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
