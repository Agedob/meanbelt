import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlphaComponent } from './alpha/alpha.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'alpha',component: AlphaComponent },
  { path: '', pathMatch: 'full', redirectTo: '/alpha' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
