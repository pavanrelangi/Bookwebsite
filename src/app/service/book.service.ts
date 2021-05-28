import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  getBook():Observable<object>{

    return this.http.get("http://localhost:2058/book/");
    
  }
  getOverview(id:number):Observable<object>{

    return this.http.get("http://localhost:2058/overview/"+id);
  }
}
