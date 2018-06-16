import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AppService } from './app.service';
import { AlbumbsComponent } from './albumbs/albumbs.component';
import { PhotosComponent } from './photos/photos.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AlbumbsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
