import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './product/products-list/products-list.component';
import { TndCurrencyPipe } from './product/tnd-currency.pipe';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';

import { PanierComponent } from './panier/panier.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditComponent } from './edit/edit.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CategorieService } from './core/services/categorie.service';
import { ProductService } from './core/services/product.service';
import {AddReclamationComponent} from "./add-reclamation/add-reclamation.component";
import {CommentaireComponent} from "./commentaire/commentaire.component";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { CategorieComponent } from './categorie/categorie.component';
import { LoginComponent,  } from './sign-in/sign-in.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { PlatListComponent } from './plat-list/plat-list.component';
import { PlatDetailComponent } from './plat-detail/plat-detail.component';
import { FavoritePlansComponent } from './favorite-plans/favorite-plans.component';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { CoachesListComponent } from './coaches-list/coaches-list.component';
import { AuthInterceptor } from './core/interceptors/auth-interceptor.service'; // Importer l'intercepteur
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReservationsComponent } from './reservations/reservations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingDialogComponent } from './shopping-dialog/shopping-dialog.component';


import { MatDialogModule } from '@angular/material/dialog';

import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    ProductsListComponent,
    TndCurrencyPipe,
    AddReclamationComponent,
    CommentaireComponent,

    PanierComponent,
    LoginComponent,
    AddproductComponent,
    EditComponent,
      SessionsListComponent,
      CoachesListComponent,
      ReservationsComponent,
      // ReservationsComponent
    EditComponent,

    RestaurantListComponent,
    RestaurantDetailComponent,
    PlatListComponent,
    PlatDetailComponent,
    FavoritePlansComponent,
    CategorieComponent,
    ShoppingDialogComponent,
    ProfileComponent,
    UpdateProfileComponent,
    ChangePasswordComponent,
      AddproductComponent,
      EditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [CategorieService, ProductService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
