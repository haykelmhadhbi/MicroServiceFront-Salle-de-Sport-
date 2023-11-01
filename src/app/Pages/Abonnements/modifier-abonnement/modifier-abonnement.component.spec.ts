import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAbonnementComponent } from './modifier-abonnement.component';

describe('ModifierAbonnementComponent', () => {
  let component: ModifierAbonnementComponent;
  let fixture: ComponentFixture<ModifierAbonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierAbonnementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierAbonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
