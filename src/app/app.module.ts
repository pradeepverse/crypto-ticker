import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatCardModule, MatMenuModule, MatTooltipModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CoinElementComponent } from './coin-element/coin-element.component';
import { CryptoService } from './crypto-service.service';


@NgModule({
  declarations: [
    AppComponent,
    CoinElementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatTooltipModule
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
