import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app-module/app.component';
import { GetAllArtistsComponent } from '../get-all-artists/get-all-artists.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'get-all-artists', component: GetAllArtistsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
