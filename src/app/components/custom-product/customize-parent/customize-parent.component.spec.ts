import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeParentComponent } from './customize-parent.component';

describe('CustomizeParentComponent', () => {
  let component: CustomizeParentComponent;
  let fixture: ComponentFixture<CustomizeParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
