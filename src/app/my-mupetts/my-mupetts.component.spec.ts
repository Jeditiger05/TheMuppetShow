import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMupettsComponent } from './my-mupetts.component';

describe('MyMupettsComponent', () => {
  let component: MyMupettsComponent;
  let fixture: ComponentFixture<MyMupettsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMupettsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMupettsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
