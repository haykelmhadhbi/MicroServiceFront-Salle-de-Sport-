import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Abonnement } from 'app/Shared/Models/Abonnements';
import { AbonnementService } from 'app/Shared/Services/abonnement.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modifier-abonnement',
  templateUrl: './modifier-abonnement.component.html',
  styleUrls: ['./modifier-abonnement.component.css']
})
export class ModifierAbonnementComponent implements OnInit {
  abonnementId: any; // Récupérer l'ID de la réservation depuis les paramètres d'URL ou autre source
  newAbonnement:Abonnement=new Abonnement();
  constructor( private abonnementService: AbonnementService,
    private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.abonnementId = params.get('id');
      console.log(this.abonnementId); // Obtenez l'ID de la réservation depuis les paramètres d'URL
      this.loadAbonnement();
    });
  }
  loadAbonnement(): void {
    this.abonnementService.getOneAbonnement(this.abonnementId)
      .subscribe((data: Abonnement) => {
        this. newAbonnement = data;
      });
  }

  updateabonnements(): void {
    this.abonnementService.updateAbonnement(this.abonnementId,this. newAbonnement)
      .subscribe((updatedAbonnement: Abonnement) => {
        console.log('Abonnement mise à jour :', updatedAbonnement);
        // Gérer la mise à jour réussie, rediriger l'utilisateur ou effectuer d'autres actions
      });
      this.router.navigate(['/Abonnements']);
      this.abonnementService.getAbonnements().subscribe();
  }

}
