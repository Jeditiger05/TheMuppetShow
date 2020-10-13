import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyArrayMupettsComponent } from './my-array-mupetts.component';

describe('MyMuppetsArrayComponent', () => {
  let component: MyArrayMupettsComponent;
  let fixture: ComponentFixture<MyArrayMupettsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyArrayMupettsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyArrayMupettsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
