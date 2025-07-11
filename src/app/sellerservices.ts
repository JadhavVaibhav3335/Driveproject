import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seller } from './seller';

@Injectable({
  providedIn: 'root'
})
export class Sellerservices {

  constructor(private ht: HttpClient) { }

  
  one(s1:Seller){
   let url="http://localhost:8080/Seller/saveSellerInfo"
   return this.ht.post(url,s1);
  }



  two(){
   
    let url="http://localhost:8080/Seller/fetchseller"
    return this.ht.get<Seller[]>(url);
  
  }

}
