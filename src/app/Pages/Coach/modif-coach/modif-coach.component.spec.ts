import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifCoachComponent } from './modif-coach.component';

describe('ModifCoachComponent', () => {
  let component: ModifCoachComponent;
  let fixture: ComponentFixture<ModifCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifCoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
