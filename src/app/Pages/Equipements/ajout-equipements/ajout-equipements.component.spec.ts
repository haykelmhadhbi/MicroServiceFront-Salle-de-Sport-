import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEquipementsComponent } from './ajout-equipements.component';

describe('AjoutEquipementsComponent', () => {
  let component: AjoutEquipementsComponent;
  let fixture: ComponentFixture<AjoutEquipementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutEquipementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutEquipementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
