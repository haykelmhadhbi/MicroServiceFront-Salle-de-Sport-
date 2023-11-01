import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coach } from 'app/Shared/Models/Coach';
import { CoachService } from 'app/Shared/Services/coach.service';

@Component({
  selector: 'app-ajout-coachs',
  templateUrl: './ajout-coachs.component.html',
  styleUrls: ['./ajout-coachs.component.css']
})
export class AjoutCoachsComponent implements OnInit {
  newCoach:Coach=new Coach();

  constructor(private coachService:CoachService,private router:Router) { }

  ngOnInit(): void {
  }
  createCoach(): void {
    this.coachService.createCoach(this.newCoach)
      .subscribe((createdEquipement: Coach) => {
        console.log('Coach créé:', createdEquipement);
        this.newCoach = new Coach();
      });
      this.router.navigate(['/Coachs']);
      this.coachService.getCoachs().subscribe();
  }

}
