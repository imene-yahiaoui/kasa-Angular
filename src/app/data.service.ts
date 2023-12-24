// data.service.ts
import { Injectable } from '@angular/core';
import {  inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FrameComponent } from './components/frame/frame.component';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'http://localhost:3000/data';
  httpClient = inject(HttpClient);

  constructor() {}

 getAllDatas(): Observable<FrameComponent[]> {
 return this.httpClient.get<FrameComponent[]>(this.url);
}

}

