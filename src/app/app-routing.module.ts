import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CervesComponent } from './components/cerves/cerves.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: '', component: CervesComponent },
  { path: ':id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
