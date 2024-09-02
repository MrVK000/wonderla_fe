import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ticketsComponent } from './tickets.component';

describe('ticketsComponent', () => {
  let component: ticketsComponent;
  let fixture: ComponentFixture<ticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ticketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
