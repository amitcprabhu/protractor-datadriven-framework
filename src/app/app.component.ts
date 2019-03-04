import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient){
    this.getUser();
  }

  getUser(){
    return this.http.get('http://localhost:8080/api/getUser/').pipe(
      map((response: Response) => response.json())
    )
  }
  
  getSamples(){

  }
}
