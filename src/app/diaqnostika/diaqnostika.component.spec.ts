import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaqnostikaComponent } from './diaqnostika.component';

describe('DiaqnostikaComponent', () => {
  let component: DiaqnostikaComponent;
  let fixture: ComponentFixture<DiaqnostikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaqnostikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaqnostikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
