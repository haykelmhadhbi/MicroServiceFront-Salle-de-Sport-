import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'app/Shared/Models/Reservation';
import { ReservationService } from 'app/Shared/Services/reservation.service';

@Component({
  selector: 'app-ajout-reservation',
  templateUrl: './ajout-reservation.component.html',
  styleUrls: ['./ajout-reservation.component.css']
})
export class AjoutReservationComponent implements OnInit {
  newReservation: Reservation = new Reservation();
  constructor(private reservationService:ReservationService,private router:Router) { }

  ngOnInit(): void {
  }
 createReservation(): void {
    this.reservationService.createReservation(this.newReservation)
      .subscribe((createdReservation: Reservation) => {
        console.log('Réservation créée:', createdReservation);
        this.newReservation = new Reservation();
      });
      this.router.navigate(['/Reservations']);
      this.reservationService.getReservations().subscribe();
  }
}
