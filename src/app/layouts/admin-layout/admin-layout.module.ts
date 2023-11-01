import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../Pages/table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { EquipementsComponent } from 'app/Pages/Equipements/equipements/equipements.component';
import { ReservationsComponent } from 'app/Pages/Reservations/reservations/reservations.component';
import { EvenementsComponent } from 'app/Pages/Evenements/evenements/evenements.component';
import { MembresComponent } from 'app/Pages/Membres/membres/membres.component';
import { CoachComponent } from 'app/Pages/Coach/coach/coach.component';
import { AbonnementsComponent } from 'app/Pages/Abonnements/abonnements/abonnements.component';
import { LoginComponent } from 'app/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AjoutReservationComponent } from 'app/Pages/Reservations/ajout-reservation/ajout-reservation.component';
import { AjoutMembresComponent } from 'app/Pages/Membres/ajout-membres/ajout-membres.component';
import { AjoutEvenementComponent } from 'app/Pages/Evenements/ajout-evenement/ajout-evenement.component';
import { AjoutEquipementsComponent } from 'app/Pages/Equipements/ajout-equipements/ajout-equipements.component';
import { AjoutCoachsComponent } from 'app/Pages/Coach/ajout-coachs/ajout-coachs.component';
import { AjoutAbonnementsComponent } from 'app/Pages/Abonnements/ajout-abonnements/ajout-abonnements.component';
import { ModifierAbonnementComponent } from 'app/Pages/Abonnements/modifier-abonnement/modifier-abonnement.component';
import { ModifierEquipementComponent } from 'app/Pages/Equipements/modifier-equipement/modifier-equipement.component';
import { ModifierReservationComponent } from 'app/Pages/Reservations/modifier-reservation/modifier-reservation.component';
import { ModifCoachComponent } from 'app/Pages/Coach/modif-coach/modif-coach.component';
import { ModifEvenementComponent } from 'app/Pages/Evenements/modif-evenement/modif-evenement.component';
import { ModifMembreComponent } from 'app/Pages/Membres/modif-membre/modif-membre.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule,
    

  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    EquipementsComponent,
    ReservationsComponent,
    EvenementsComponent,
    MembresComponent,
    CoachComponent,
    AbonnementsComponent,
    AjoutReservationComponent,
    AjoutMembresComponent,
    AjoutEvenementComponent,
    AjoutEquipementsComponent,
    AjoutCoachsComponent,
    AjoutAbonnementsComponent,
    ModifierAbonnementComponent,
    ModifierEquipementComponent,
    ModifierReservationComponent,
    ModifCoachComponent,
    ModifEvenementComponent,
    ModifMembreComponent
    
  ]
})

export class AdminLayoutModule {}
