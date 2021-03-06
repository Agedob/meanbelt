import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlphaComponent } from './alpha/alpha.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ReviewComponent } from './review/review.component';
import { NewreviewComponent } from './newreview/newreview.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'Dashboard',component: AlphaComponent },
  { path: 'make_a_new_restaurant', component: NewComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'review/:id', component: ReviewComponent},
  { path: 'review/add/:id', component: NewreviewComponent},
  { path: '', pathMatch: 'full', redirectTo: '/Dashboard' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
