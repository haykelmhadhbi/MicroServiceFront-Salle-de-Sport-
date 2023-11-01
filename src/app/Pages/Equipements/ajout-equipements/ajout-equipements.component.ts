import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipement } from 'app/Shared/Models/Equipement';
import { EquipementServiceService } from 'app/Shared/Services/equipement-service.service';

@Component({
  selector: 'app-ajout-equipements',
  templateUrl: './ajout-equipements.component.html',
  styleUrls: ['./ajout-equipements.component.css']
})
export class AjoutEquipementsComponent implements OnInit {
newEquipement:Equipement=new Equipement();
  constructor(private equipementService:EquipementServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  createEquipement(): void {
    this.equipementService.createEquipement(this.newEquipement)
      .subscribe((createdEquipement: Equipement) => {
        console.log('Equipement créé:', createdEquipement);
        this.newEquipement = new Equipement();
      });
      this.router.navigate(['/Equipements']);
      this.equipementService.getEquipements().subscribe();
  }
}
