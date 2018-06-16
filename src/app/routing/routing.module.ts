import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../users/users.component';
import { AlbumbsComponent } from '../albumbs/albumbs.component';
import { PhotosComponent } from '../photos/photos.component';


const routes:Routes=[
  
    { path:'users',component:UsersComponent},
    { path:'albumbs/:id',component:AlbumbsComponent},
    { path:'photos/:id',component:PhotosComponent},
    { path: '', redirectTo: '/users',pathMatch: 'full' }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }
