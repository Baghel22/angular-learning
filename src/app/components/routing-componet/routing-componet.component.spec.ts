import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingComponetComponent } from './routing-componet.component';

describe('RoutingComponetComponent', () => {
  let component: RoutingComponetComponent;
  let fixture: ComponentFixture<RoutingComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingComponetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
