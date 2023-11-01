import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCoachsComponent } from './ajout-coachs.component';

describe('AjoutCoachsComponent', () => {
  let component: AjoutCoachsComponent;
  let fixture: ComponentFixture<AjoutCoachsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCoachsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutCoachsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
