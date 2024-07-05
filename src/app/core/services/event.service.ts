import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { IEvent } from '../interface/IEvent';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http:HttpClient) { }
  apiUrl='http://localhost:3000/api/event/'
  
  getEvents(){
    return this.http.get<any>(`${this.apiUrl}getevents`)
  }
  getEventById(eventId:string){
    return this.http.get<any>(`${this.apiUrl}geteventbyid/${eventId}`)
  }
  addEvent(eventData:IEvent){
    return this.http.post<any>(`${this.apiUrl}/addevent`,eventData)
  }
  updateEvent(eventData:IEvent,eventId:string){
    return this.http.put<any>(`${this.apiUrl}/updateevent/${eventId}`,eventData)
  }
  deleteEvent(eventId:string){
    return this.http.delete<any>(`${this.apiUrl}/deleteevent/${eventId}`)
  }
}
