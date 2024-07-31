import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchupdateComponent } from './launchupdate.component';

describe('LaunchupdateComponent', () => {
  let component: LaunchupdateComponent;
  let fixture: ComponentFixture<LaunchupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
