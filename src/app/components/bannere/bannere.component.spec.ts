import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannereComponent } from './bannere.component';

describe('BannereComponent', () => {
  let component: BannereComponent;
  let fixture: ComponentFixture<BannereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
