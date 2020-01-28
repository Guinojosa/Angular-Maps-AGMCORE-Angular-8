import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsAgmDraggableComponent } from './maps-agm-draggable.component';

describe('MapsAgmDraggableComponent', () => {
  let component: MapsAgmDraggableComponent;
  let fixture: ComponentFixture<MapsAgmDraggableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsAgmDraggableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsAgmDraggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
