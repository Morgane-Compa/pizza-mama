import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuonAppetitoComponent } from './buon-appetito.component';

describe('BuonAppetitoComponent', () => {
  let component: BuonAppetitoComponent;
  let fixture: ComponentFixture<BuonAppetitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuonAppetitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuonAppetitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
