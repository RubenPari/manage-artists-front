import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app-module/app.component';
import { ArtistsListComponent } from '../artists-list/artists-list.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'artists', component: ArtistsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
