import { Component, OnInit } from '@angular/core';
import { Abonnement } from 'app/Shared/Models/Abonnements';
import { AbonnementService } from 'app/Shared/Services/abonnement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abonnements',
  templateUrl: './abonnements.component.html',
  styleUrls: ['./abonnements.component.css']
})
export class AbonnementsComponent implements OnInit {
AllAbonnements:Abonnement[]=[];
  constructor(private abonnementService: AbonnementService, private router: Router) { }

  ngOnInit(): void {
    this.getAllAbonnements();
  }
  getAllAbonnements(){
    this.abonnementService.getAbonnements().subscribe(
    data=>this.AllAbonnements=data
    )
    console.log(this.AllAbonnements)

  }
  delete(d:Abonnement){
    console.log(d);
    this.abonnementService.deleteAbonnement(d).subscribe(()=>this.abonnementService.getAbonnements().subscribe(
      res=>this.AllAbonnements=res))
      window.location.reload();
  }
}
