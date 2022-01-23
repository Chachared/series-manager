import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthComponent } from './views/auth/auth.component';
import { SeriesListComponent } from './views/series-list/series-list.component';
import { NewSerieComponent } from './views/new-serie/new-serie.component';
import { SingleSerieComponent } from './views/single-serie/single-serie.component';
import { EditSerieComponent } from './views/edit-serie/edit-serie.component';
import { ErrorComponent } from './views/error/error.component';
import { NewCommentComponent } from './views/new-comment/new-comment.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'series', canActivate: [AuthGuard], component: SeriesListComponent },
  {
    path: 'series/new',
    canActivate: [AuthGuard],
    component: NewSerieComponent,
  },
  {
    path: 'comments/new/:id',
    canActivate: [AuthGuard],
    component: NewCommentComponent,
  },
  {
    path: 'series/:id',
    canActivate: [AuthGuard],
    component: SingleSerieComponent,
  },
  {
    path: 'series/edit/:id',
    canActivate: [AuthGuard],
    component: EditSerieComponent,
  },
  { path: 'not-found', component: ErrorComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
