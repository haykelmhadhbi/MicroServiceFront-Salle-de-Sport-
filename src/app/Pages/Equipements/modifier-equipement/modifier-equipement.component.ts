import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipement } from 'app/Shared/Models/Equipement';
import { AbonnementService } from 'app/Shared/Services/abonnement.service';
import { EquipementServiceService } from 'app/Shared/Services/equipement-service.service';


@Component({
  selector: 'app-modifier-equipement',
  templateUrl: './modifier-equipement.component.html',
  styleUrls: ['./modifier-equipement.component.css']
})
export class ModifierEquipementComponent implements OnInit {
  equipementId: any; // Récupérer l'ID de la réservation depuis les paramètres d'URL ou autre source
  newEquipement:Equipement=new Equipement();
  constructor( private equipementService:EquipementServiceService,
    private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.equipementId = params.get('id');
      console.log(this.equipementId); // Obtenez l'ID de la réservation depuis les paramètres d'URL
      this.loadEquipement();
    });
  }
  loadEquipement(): void {
    this.equipementService.getOneEquipement(this.equipementId)
      .subscribe((data: Equipement) => {
        this. newEquipement = data;
      });
  }

  updateEquipement(): void {
    this.equipementService.updateEquipement(this.equipementId,this. newEquipement)
      .subscribe((updatedEquipement: Equipement) => {
        console.log('Equipement mise à jour :', updatedEquipement);
        this.router.navigate(['/Equipements']);
        this.equipementService.getEquipements().subscribe()
        // Gérer la mise à jour réussie, rediriger l'utilisateur ou effectuer d'autres actions
      });
    ;
  }
}
