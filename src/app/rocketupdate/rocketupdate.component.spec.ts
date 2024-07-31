import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketupdateComponent } from './rocketupdate.component';

describe('RocketupdateComponent', () => {
  let component: RocketupdateComponent;
  let fixture: ComponentFixture<RocketupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocketupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
