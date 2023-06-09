import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewCarsComponent } from './user-view-cars.component';

describe('UserViewCarsComponent', () => {
  let component: UserViewCarsComponent;
  let fixture: ComponentFixture<UserViewCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewCarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
