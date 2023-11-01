import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Reservation } from 'app/Shared/Models/Reservation';
import { ReservationService } from 'app/Shared/Services/reservation.service';

@Component({
  selector: 'app-modifier-reservation',
  templateUrl: './modifier-reservation.component.html',
  styleUrls: ['./modifier-reservation.component.css']
})
export class ModifierReservationComponent implements OnInit {
  reservationId: any; // Récupérer l'ID de la réservation depuis les paramètres d'URL ou autre source
  newReservation: Reservation=new Reservation();
 
  constructor( private reservationService: ReservationService,
    private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.reservationId = params['id']; 
      console.log(this.reservationId)// Obtenez l'ID de la réservation depuis les paramètres d'URL
      this.loadReservation();
    });
  }
  loadReservation(): void {
    this.reservationService.getOneReservation(this.reservationId)
      .subscribe((data: Reservation) => {
        this.newReservation = data;
      });
  }

  updateReservation(): void {
    this.reservationService.updateReservation(this.newReservation)
      .subscribe((updatedReservation: Reservation) => {
        console.log('Réservation mise à jour :', updatedReservation);
        // Gérer la mise à jour réussie, rediriger l'utilisateur ou effectuer d'autres actions
        this.router.navigate(['/Reservations']);
        this.reservationService.getReservations().subscribe()
      });
     
  }

}
