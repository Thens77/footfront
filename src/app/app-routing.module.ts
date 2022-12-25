import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ASC } from './config/navigation.constants';
import { ArticleDetailComponent } from './entities/article/detail/article-detail.component';
import { ArticleComponent } from './entities/article/list/article.component';
import { ArticleUpdateComponent } from './entities/article/update/article-update.component';
import { ClubComponent } from './entities/club/list/club.component';
import { ReservationComponent } from './entities/reservation/list/reservation.component';
import { ReservationUpdateComponent } from './entities/reservation/update/reservation-update.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';

const routes: Routes = [
    {
      path: '',
      component: ArticleComponent,
      data: {
        defaultSort: 'id,' + ASC,
      },
    },
    {
      path: 'article',
      component: ArticleComponent,
      data: {
        defaultSort: 'id,' + ASC,
      },
    },
    {
      path: 'article/:id/view',
      component: ArticleDetailComponent,
    },
    {
      path: 'article/new',
      component: ArticleUpdateComponent,
    },
    {
      path: 'article/:id/edit',
      component: ArticleUpdateComponent,
    },
    {
      path: 'club',
      component: ClubComponent,
      data: {
        defaultSort: 'id,' + ASC,
      },
    },
    {
      path: 'reservation',
      component: ReservationComponent,
      data: {
        defaultSort: 'id,' + ASC,
      },
    },
    {
      path:'nav',
      component: NavbarComponent,
    },
    {
      path: 'reservation/new',
      component: ReservationUpdateComponent,
      data: {
        defaultSort: 'id,' + ASC,
      },
    },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
