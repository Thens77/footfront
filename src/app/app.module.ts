import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './entities/article/list/article.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreneauUpdateComponent } from './entities/creneau/update/creneau-update.component';


@NgModule({
  declarations: [
    ClubComponent,

    ClubUpdateComponent,

    ArticleComponent,
    AppComponent,
    DashboardComponent,
    FooterComponent,
    MainComponent,
    NavbarComponent,
    ReservationUpdateComponent,
    CreneauUpdateComponent

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
    NgbModule
  
    
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
