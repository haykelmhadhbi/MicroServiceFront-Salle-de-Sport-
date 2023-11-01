import { Component, OnInit } from '@angular/core';
import { Equipement } from 'app/Shared/Models/Equipement';
import { EquipementServiceService } from 'app/Shared/Services/equipement-service.service';

@Component({
  selector: 'app-equipements',
  templateUrl: './equipements.component.html',
  styleUrls: ['./equipements.component.css']
})
export class EquipementsComponent implements OnInit {
Allequipements:Equipement[]=[];
  constructor(private equipementService:EquipementServiceService) {
    this.getAllEquipements();
   }

  ngOnInit(): void {
    this.getAllEquipements();
  }
  getAllEquipements(){
    this.equipementService.getEquipements().subscribe(
    data=>this.Allequipements=data
    )
    console.log(this.Allequipements)
  }

  delete(d:Equipement){
    console.log(d);
    this.equipementService.deleteEquipement(d).subscribe(()=>this.equipementService.getEquipements().subscribe(
      res=>this.Allequipements=res))
      window.location.reload();
  }
}
