import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatChipsModule} from '@angular/material/chips'; 
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatSliderModule
    , MatIconModule, MatButtonModule, MatCardModule, MatDividerModule, MatListModule, MatChipsModule, MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
