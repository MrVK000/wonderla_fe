import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkTicketComponent } from './park-ticket.component';

describe('ParkTicketComponent', () => {
  let component: ParkTicketComponent;
  let fixture: ComponentFixture<ParkTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParkTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
