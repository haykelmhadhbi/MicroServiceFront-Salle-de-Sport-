import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../Pages/table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { EquipementsComponent } from 'app/Pages/Equipements/equipements/equipements.component';
import { EvenementsComponent } from 'app/Pages/Evenements/evenements/evenements.component';
import { ReservationsComponent } from 'app/Pages/Reservations/reservations/reservations.component';
import { AbonnementsComponent } from 'app/Pages/Abonnements/abonnements/abonnements.component';
import { CoachComponent } from 'app/Pages/Coach/coach/coach.component';
import { MembresComponent } from 'app/Pages/Membres/membres/membres.component';
import { LoginComponent } from 'app/login/login.component';
import { AjoutReservationComponent } from 'app/Pages/Reservations/ajout-reservation/ajout-reservation.component';
import { AjoutMembresComponent } from 'app/Pages/Membres/ajout-membres/ajout-membres.component';
import { AjoutEvenementComponent } from 'app/Pages/Evenements/ajout-evenement/ajout-evenement.component';
import { AjoutEquipementsComponent } from 'app/Pages/Equipements/ajout-equipements/ajout-equipements.component';
import { AjoutAbonnementsComponent } from 'app/Pages/Abonnements/ajout-abonnements/ajout-abonnements.component';
import { AjoutCoachsComponent } from 'app/Pages/Coach/ajout-coachs/ajout-coachs.component';
import { ModifierAbonnementComponent } from 'app/Pages/Abonnements/modifier-abonnement/modifier-abonnement.component';
import { ModifierEquipementComponent } from 'app/Pages/Equipements/modifier-equipement/modifier-equipement.component';
import { ModifierReservationComponent } from 'app/Pages/Reservations/modifier-reservation/modifier-reservation.component';
import { ModifEvenementComponent } from 'app/Pages/Evenements/modif-evenement/modif-evenement.component';
import { ModifCoachComponent } from 'app/Pages/Coach/modif-coach/modif-coach.component';
import { ModifMembreComponent } from 'app/Pages/Membres/modif-membre/modif-membre.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'Equipements',        component: EquipementsComponent },
    { path: 'Evenements',        component: EvenementsComponent },
    { path: 'Reservations',        component: ReservationsComponent },
    { path: 'Abonnements',        component: AbonnementsComponent },
    { path: 'Coachs',        component: CoachComponent },
    { path: 'Membres',        component: MembresComponent },
    { path: 'ajoutReservation',     component: AjoutReservationComponent },
    { path: 'ajoutMembre',     component: AjoutMembresComponent },
    { path: 'ajoutEvenement',     component: AjoutEvenementComponent },
    { path: 'ajoutEquipement',     component: AjoutEquipementsComponent },
    { path: 'ajoutAbonnement',     component: AjoutAbonnementsComponent },
    { path: 'ajoutCoach',     component: AjoutCoachsComponent },
    { path: 'updateAbonnement/:id',     component: ModifierAbonnementComponent},
    { path: 'updateEquipement/:id',     component: ModifierEquipementComponent},
    { path: 'updateReservation',     component: ModifierReservationComponent},
    { path: 'updateEvenement/:id',     component: ModifEvenementComponent},
    { path: 'updateCoach/:id',     component: ModifCoachComponent},
    { path: 'updateMembre/:id',     component: ModifMembreComponent},

    
];
