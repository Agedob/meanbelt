import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BeltService } from './belt.service'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ReviewComponent } from './review/review.component';
import { NewreviewComponent } from './newreview/newreview.component';


@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    PagenotfoundComponent,
    NewComponent,
    EditComponent,
    ReviewComponent,
    NewreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BeltService],
  bootstrap: [AppComponent]
})
export class AppModule { }
