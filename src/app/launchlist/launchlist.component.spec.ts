import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchlistComponent } from './launchlist.component';

describe('LaunchlistComponent', () => {
  let component: LaunchlistComponent;
  let fixture: ComponentFixture<LaunchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
