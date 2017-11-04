import { Component, OnInit, Input } from '@angular/core';
import { CryptoService } from './../crypto-service.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-coin-element',
  templateUrl: './coin-element.component.html',
  styleUrls: ['./coin-element.component.css']
})
export class CoinElementComponent implements OnInit {

  constructor(private CryptoService: CryptoService) { }

  ngOnInit() {
    this.CryptoService.fetchFromEndPoint(this.cryptoDetail.api).subscribe(data => {
      this.crypto = data[0];
      if(this.lastPriceTemp != this.crypto.price_usd){
        this.saveLastPrice();
      }
      this.lastPriceTemp = this.crypto.price_usd;
    });
    Observable.interval(1000 * 30).subscribe(x => {
      this.CryptoService.fetchFromEndPoint(this.cryptoDetail.api).subscribe(data => {
        this.crypto = data[0];
        if(this.lastPriceTemp != this.crypto.price_usd){
          this.saveLastPrice();
        }
        this.lastPriceTemp = this.crypto.price_usd;
    });
    });
  }

  saveLastPrice(): void{
    if(this.lastPrice == null){
      this.lastPrice = this.crypto.price_usd;
    } else {
      this.lastPrice = this.lastPriceTemp;
    }
  }

  @Input() cryptoDetail: any;
  crypto: any;
  lastPrice: any = null;
  lastPriceTemp: any = null;

}
