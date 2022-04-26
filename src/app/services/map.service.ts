import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MapTokenResponse } from '../models/map-token';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  tokenResponse:MapTokenResponse;
  private tokenUrl = '/api/security/oauth/token?grant_type=client_credentials&client_id=33OkryzDZsKQxhO_AlydwDpbOTdelWfInmT32Qq8K0zbfSXuClsAVtSL7c6oA6KZ-ZWdA6RsnQ2okFDWK9GYIw==&client_secret=lrFxI-iSEg9C1c2TuWd593CGmiqbik7Ep9R6xqsFJpLSgOgzX2tLOz3-vicXXnbAf80gk2iFYfmCoLGfA3DQLGokp2kGMf2E';
  //private addressUrl = '/api/places/geocode?address=';
  private addressUrl = 'http://localhost:3300/api/user/getAddress/';
  constructor(private http:HttpClient) { 

  }

  generateToken(){
    return this.http.post(this.tokenUrl, {}).subscribe((tokenData)=>{
    this.tokenResponse = <MapTokenResponse>tokenData
    console.log(this.tokenResponse.access_token);  
   });
  }

  getAddresses(address:string){
    // return this.http.get(this.addressUrl + address, {
    //   headers:{
    //     "Content-Type" : 'application/json',
    //     "Authorization": this.tokenResponse.token_type + " " + this.tokenResponse.access_token
    //   }
    // })
    return this.http.get(this.addressUrl + address,{});
    // .pipe(map((results: any)=>{results}))

  }


}
