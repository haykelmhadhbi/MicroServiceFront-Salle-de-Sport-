import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CoachComponent } from './Pages/Coach/coach/coach.component';
import { AbonnementsComponent } from './Pages/Abonnements/abonnements/abonnements.component';
import { MembresComponent } from './Pages/Membres/membres/membres.component';
import { AjoutMembresComponent } from './Pages/Membres/ajout-membres/ajout-membres.component';
import { AjoutEvenementComponent } from './Pages/Evenements/ajout-evenement/ajout-evenement.component';
import { AjoutEquipementsComponent } from './Pages/Equipements/ajout-equipements/ajout-equipements.component';
import { AjoutCoachsComponent } from './Pages/Coach/ajout-coachs/ajout-coachs.component';
import { AjoutAbonnementsComponent } from './Pages/Abonnements/ajout-abonnements/ajout-abonnements.component';
import { ModifierAbonnementComponent } from './Pages/Abonnements/modifier-abonnement/modifier-abonnement.component';
import { ModifierReservationComponent } from './Pages/Reservations/modifier-reservation/modifier-reservation.component';
import { ModifierEquipementComponent } from './Pages/Equipements/modifier-equipement/modifier-equipement.component';
import { LoginComponent } from './login/login.component';
import { ModifCoachComponent } from './Pages/Coach/modif-coach/modif-coach.component';
import { ModifEvenementComponent } from './Pages/Evenements/modif-evenement/modif-evenement.component';
import { ModifMembreComponent } from './Pages/Membres/modif-membre/modif-membre.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
