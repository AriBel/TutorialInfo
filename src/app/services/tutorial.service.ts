import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const baseUrl = 'https://localhost:7077/api/Tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Tutorial[]>
  {
    return this.http.get<Tutorial[]>(baseUrl);
  }

  getTutorial(id:number): Observable<Tutorial>
  {
    return this.http.get<Tutorial>(`${baseUrl}/${id}`);
  }

  addTutorial(tutorial:Tutorial): Observable<Tutorial>
  {
    return this.http.post(baseUrl, tutorial);
  }

  updateTutorial(id:number, tutorial:Tutorial): Observable<any>
  {
    return this.http.put(`${baseUrl}/${id}`, tutorial);
  }

  deleteTutorial(id:number): Observable<any>
  {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAllTutorials(): Observable<any>
  {
    return this.http.delete(baseUrl);
  }

  searchByTitle(title: string): Observable<Tutorial[]>
  {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  }

}
