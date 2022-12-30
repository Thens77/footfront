import { NgModule , CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './entities/article/list/article.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './config/auth.guard';
import { AuthInterceptor } from './config/auth.interceptor'; 
import { MatSelectModule } from '@angular/material/select';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClubComponent } from './entities/club/list/club.component';
import { CommonModule } from '@angular/common';
import { ReservationUpdateComponent } from './entities/reservation/update/reservation-update.component';
import { ClubUpdateComponent } from './entities/club/update/club-update.component';
import { MatDialogModule} from '@angular/material/dialog' ;
import { CreneauUpdateComponent } from './entities/creneau/update/creneau-update.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CreneauComponent } from './entities/creneau/list/creneau.component';
import { CommentaireUpdateComponent } from './entities/commentaire/update/commentaire-update.component';
import { HomeclubComponent } from './entities/club/homeclub/homeclub.component';
import { ClubTComponent } from './entities/club/club-t/club-t.component';
import { TerrainComponent } from './entities/terrain/list/terrain.component';
import { NavbarComponentC } from './layouts/navbarC/navbar.component';
import { NavbarComponentT } from './layouts/navbarT/navbar.component';
import { ListTerrain2Component } from './entities/terrain/list-terrain2/list-terrain2.component';

@NgModule({
  declarations: [
    ClubComponent,
    ClubUpdateComponent,
    ArticleComponent,
    AppComponent,
    DashboardComponent,
    FooterComponent,
    MainComponent,
    NavbarComponentC,
    ReservationUpdateComponent,
    CreneauUpdateComponent,
    CreneauComponent,
    CommentaireUpdateComponent,
    ClubUpdateComponent,
    HomeclubComponent,
    ClubTComponent,
    TerrainComponent,
    NavbarComponentT,
    ListTerrain2Component,

  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },  
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
