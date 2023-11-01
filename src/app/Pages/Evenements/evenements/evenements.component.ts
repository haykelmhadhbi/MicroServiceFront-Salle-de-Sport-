import { Component, OnInit } from '@angular/core';
import { Evenement } from 'app/Shared/Models/Evenement';
import { EvenementsService } from 'app/Shared/Services/evenements.service';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent implements OnInit {
  Allevenements:Evenement[]=[];
  constructor(private evenementService:EvenementsService) { }

  ngOnInit(): void {
    this.getAllEvenements();
  }
  getAllEvenements(){
    this.evenementService.getEvenements().subscribe(
    data=>this.Allevenements=data
    )
    console.log(this.Allevenements)
  }
  delete(d:Evenement){
    console.log(d);
    this.evenementService.deleteEvenement(d).subscribe(()=>this.evenementService.getEvenements().subscribe(
      res=>this.Allevenements=res))
      window.location.reload();
  }
}
