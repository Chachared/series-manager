import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerieFormComponent } from './components/serie-form/serie-form.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { AuthComponent } from './views/auth/auth.component';
import { ErrorComponent } from './views/error/error.component';
import { SeriesListComponent } from './views/series-list/series-list.component';
import { EditSerieComponent } from './views/edit-serie/edit-serie.component';
import { NewSerieComponent } from './views/new-serie/new-serie.component';
import { SingleSerieComponent } from './views/single-serie/single-serie.component';
import { NewCommentComponent } from './views/new-comment/new-comment.component';
import { SerieService } from './services/serie/serie.service';
import { AuthService } from './services/auth/auth.service';
import { CommentService } from './services/comment/comment.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SerieFormComponent,
    CommentFormComponent,
    AuthComponent,
    ErrorComponent,
    SeriesListComponent,
    EditSerieComponent,
    NewSerieComponent,
    SingleSerieComponent,
    NewCommentComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [SerieService, AuthService, CommentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
