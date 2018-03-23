import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BeltService } from './belt.service'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    PagenotfoundComponent
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
