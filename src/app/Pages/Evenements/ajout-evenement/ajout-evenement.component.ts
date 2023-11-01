import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evenement } from 'app/Shared/Models/Evenement';
import { EvenementsService } from 'app/Shared/Services/evenements.service';

@Component({
  selector: 'app-ajout-evenement',
  templateUrl: './ajout-evenement.component.html',
  styleUrls: ['./ajout-evenement.component.css']
})
export class AjoutEvenementComponent implements OnInit {
  newEvenement:Evenement=new Evenement();
  constructor(private evenementService :EvenementsService,private router:Router) { }

  ngOnInit(): void {
  }
  createEvenement(): void {
    this.evenementService.createEvenement(this.newEvenement)
      .subscribe((createdEvenement: Evenement) => {
        console.log('Membre créée:', createdEvenement);
        this.newEvenement = new Evenement();
      });
      this.router.navigate(['/Evenements']);
      this.evenementService.getEvenements().subscribe();
  }
}
