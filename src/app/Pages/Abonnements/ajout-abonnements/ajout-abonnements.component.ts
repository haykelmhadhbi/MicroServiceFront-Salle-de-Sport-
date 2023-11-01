import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Abonnement } from 'app/Shared/Models/Abonnements';
import { AbonnementService } from 'app/Shared/Services/abonnement.service';

@Component({
  selector: 'app-ajout-abonnements',
  templateUrl: './ajout-abonnements.component.html',
  styleUrls: ['./ajout-abonnements.component.css']
})
export class AjoutAbonnementsComponent implements OnInit {
newAbonnement:Abonnement=new Abonnement();
  constructor(private abonnementService:AbonnementService,private router:Router) { }

  ngOnInit(): void {
  }
  createabonnements(): void {
    this.abonnementService.createAbonnement(this.newAbonnement)
      .subscribe((createdAbonnement: Abonnement) => {
        console.log('Abonnement créé:', createdAbonnement);
        this.newAbonnement = new Abonnement();
      });
      this.router.navigate(['/Abonnements']);
      this.abonnementService.getAbonnements().subscribe();
  }
}
