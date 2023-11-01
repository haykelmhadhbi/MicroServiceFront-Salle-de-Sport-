import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coach } from 'app/Shared/Models/Coach';
import { CoachService } from 'app/Shared/Services/coach.service';

@Component({
  selector: 'app-modif-coach',
  templateUrl: './modif-coach.component.html',
  styleUrls: ['./modif-coach.component.css']
})
export class ModifCoachComponent implements OnInit {

  coachId: any; 
  newCoach:Coach=new Coach();
  constructor( private coachService: CoachService,
    private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.coachId = params.get('id');
      console.log(this.coachId);
      this.loadCoach();
    });
  }
  loadCoach(): void {
    this.coachService.getOneCoach(this.coachId)
      .subscribe((data: Coach) => {
        this.newCoach = data;
      });
  }

  updateCoach(): void {
    this.coachService.updateCoach(this.newCoach)
      .subscribe((updatedAbonnement: Coach) => {
        console.log('Coach mise à jour :', updatedAbonnement);
      });
      this.router.navigate(['/Coachs']);
      this.coachService.getCoachs().subscribe();
  }
}
