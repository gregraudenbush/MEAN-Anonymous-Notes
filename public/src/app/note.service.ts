import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";


@Injectable()
export class NoteService {
  constructor(private _http: Http) { }

  
  retrieveTasks() {
    
     console.log("USER SERVICE METHOD GET Notes"); 
     return this._http.get('/notes')
     .map(data=>data.json())
     .toPromise()
     
  }
    postnote(note) {
      return this._http.post('/post', note)
      .map( data => data.json() )
      .toPromise()     
     
  }
}
  


