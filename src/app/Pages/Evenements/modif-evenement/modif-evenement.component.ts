import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evenement } from 'app/Shared/Models/Evenement';
import { EvenementsService } from 'app/Shared/Services/evenements.service';

@Component({
  selector: 'app-modif-evenement',
  templateUrl: './modif-evenement.component.html',
  styleUrls: ['./modif-evenement.component.css']
})
export class ModifEvenementComponent implements OnInit {

  evenementId: any; 
  newEvenement:Evenement=new Evenement();
  constructor( private evenementService: EvenementsService,
    private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.evenementId = params.get('id');
      console.log(this.evenementId); 
      this.loadEvenement();
    });
  }
  loadEvenement(): void {
    this.evenementService.getOneEvenement(this.evenementId)
      .subscribe((data: Evenement) => {
        this. newEvenement = data;
      });
  }

  updateEvenements(): void {
    this.evenementService.updateEvenement(this.evenementId,this. newEvenement)
      .subscribe((updatedEvenement: Evenement) => {
        console.log('Evenement mis à jour :', updatedEvenement);
      });
      this.router.navigate(['/Evenements']);
      this.evenementService.getEvenements().subscribe();
  }

}
