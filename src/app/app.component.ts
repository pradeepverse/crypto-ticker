import { Component, OnInit } from '@angular/core';
import { CryptoService } from './crypto-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cryptoConstants: any;

  constructor(private crytoService: CryptoService){ 
  }

  ngOnInit(): void{
    this.cryptoConstants = this.crytoService.getCryptoConstants();
    this.crytoService.getDefaultCryptoDetails();
  }
  
}
