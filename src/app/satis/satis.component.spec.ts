import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisComponent } from './satis.component';

describe('SatisComponent', () => {
  let component: SatisComponent;
  let fixture: ComponentFixture<SatisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
