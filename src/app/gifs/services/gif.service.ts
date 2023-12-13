import { Injectable } from '@angular/core';
import { GIF, arrayGIF } from '../interfaces/GIF';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private endpoint:string = 'https://api.giphy.com/v1/gifs';
  private apiKey:string='Aquí Debería Ir La API Key';
  arrayGifs:GIF[] = [];
  history:string[] = [];

  constructor(private http:HttpClient) {
    let arrayHistoryLocal=localStorage.getItem('History');
    if(arrayHistoryLocal!==null) this.history=JSON.parse(arrayHistoryLocal||'[]');
  }

  getData(search:string) {
    if(this.history.includes(search.toLocaleLowerCase())) {
      let repeatIndex = this.history.findIndex(search_ => search_==search.toLocaleLowerCase());
      this.history.splice(repeatIndex,1);
      this.history.unshift(search.toLocaleLowerCase());
    } else {
      if (this.history.length<10) {
        this.history.unshift(search.toLocaleLowerCase());
      } else {
        this.history.pop();
        this.history.unshift(search.toLocaleLowerCase());
      }
    }  
    localStorage.setItem('History',JSON.stringify(this.history));
     if (search.length==0) console.log('Error Al Realizar la Búsqueda');
     else {
      const params = new HttpParams()
        .set('api_key',this.apiKey)
        .set('q',search)
        .set('limit',12)
        .set('lang','es');
        
      this.http.get<arrayGIF>(`${this.endpoint}/search`,{params})
        .subscribe(response => {
          this.arrayGifs=response.data;
        })
     }
  } 
}
