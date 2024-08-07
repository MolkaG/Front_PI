import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductsListComponent} from "./product/products-list/products-list.component";
import {NotFoundComponent} from './not-found/not-found.component';
import {PanierComponent} from "./panier/panier.component";
import {AddproductComponent} from "./addproduct/addproduct.component";
import {EditComponent} from "./edit/edit.component";
import {RestaurantListComponent} from './restaurant-list/restaurant-list.component';
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component';
import {PlatListComponent} from './plat-list/plat-list.component';
import {PlatDetailComponent} from './plat-detail/plat-detail.component';
import {FavoritePlansComponent} from './favorite-plans/favorite-plans.component';
import {SessionsListComponent} from "./sessions-list/sessions-list.component";
import {CoachesListComponent} from './coaches-list/coaches-list.component';
// import { ReservationFormComponent } from "./reservation/reservation-form.component";
import {ReservationsComponent} from "./reservations/reservations.component";
import {CategorieComponent} from "./categorie/categorie.component";
import {LoginComponent} from './sign-in/sign-in.component';
import {ProfileComponent} from './profile/profile.component';
import {UpdateProfileComponent} from './update-profile/update-profile.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {AddReclamationComponent} from "./add-reclamation/add-reclamation.component";
import {CommentaireComponent} from "./commentaire/commentaire.component";

const routes: Routes = [
  {path: '', redirectTo: 'product', pathMatch: 'full'}, // Redirection vers 'product' par défaut
  {path: 'product', component: ProductsListComponent},
  {path: 'panier', component: PanierComponent}, // Assurez-vous que cette route est correcte
  {path: 'add', component: AddproductComponent},
  {path: 'edit', component: EditComponent},
  {path: 'add-reclamation', component: AddReclamationComponent},
  {path: 'categorie', component: CommentaireComponent},
  {path: '', redirectTo: 'product', pathMatch: 'full'}, // Redirection vers 'product' par défaut
  {path: 'sessions', component: SessionsListComponent},
  {path: 'coaches', component: CoachesListComponent},
  {path: 'reserver', component: ReservationsComponent},
  {path: 'categories', component: CategorieComponent},
  {path: 'sign-in', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'update-profile', component: UpdateProfileComponent},
  {path: 'change-password', component: ChangePasswordComponent},

  {path: 'restaurant-list', component: RestaurantListComponent},
  {path: 'restaurant/:id', component: RestaurantDetailComponent},
  {path: 'plat-list', component: PlatListComponent},
  {path: 'plat/:id', component: PlatDetailComponent},
  {path: 'favorites', component: FavoritePlansComponent},
  {path: 'add-reclamation', component: AddReclamationComponent},
  {path: 'categorie', component: CommentaireComponent},
  {path: 'categories', component: CategorieComponent},
  {path: 'sign-in', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'update-profile', component: UpdateProfileComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: '**', component: NotFoundComponent} // Route par défaut pour les chemins inconnus

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
