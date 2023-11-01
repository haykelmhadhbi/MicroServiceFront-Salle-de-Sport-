import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAbonnementsComponent } from './ajout-abonnements.component';

describe('AjoutAbonnementsComponent', () => {
  let component: AjoutAbonnementsComponent;
  let fixture: ComponentFixture<AjoutAbonnementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutAbonnementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutAbonnementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
