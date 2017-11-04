import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CRYPTO_DATA } from './constants/crypto-constants';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class CryptoService {

  defaultCryptoDetailsArray: any[] = new Array();

  constructor(private http: Http) { }

  ngOnInit(): void{
    this.getDefaultCryptoDetails();
  }

  getCryptoConstants(): any[]{
    return CRYPTO_DATA;
  }

  getDefaultCryptoDetails(){
    for (let crypto of CRYPTO_DATA) {
      this.fetchFromEndPoint(crypto.api).subscribe(data => {
          this.defaultCryptoDetailsArray.push(data);
        });
    }
  }

  fetchFromEndPoint(endpointURI: string) : Observable<any>{
    return this.http.get(endpointURI)
                    .map((res:Response) => res.json())
                    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
