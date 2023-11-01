import { Component, OnInit } from '@angular/core';
import { Reservation } from 'app/Shared/Models/Reservation';
import { ReservationService } from 'app/Shared/Services/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  Allreservations:Reservation[]=[];
  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getAllReservations();
  }
  getAllReservations(){
    this.reservationService.getReservations().subscribe(
    data=>this.Allreservations=data
    )
    console.log(this.Allreservations)
  }
  delete(d:Reservation){
    this.reservationService.deleteReservation(d).subscribe(()=>this.reservationService.getReservations().subscribe(
      data=>this.Allreservations=data))
      window.location.reload()
  }
  
}
