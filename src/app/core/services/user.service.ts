import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interface/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  apiUrl='http://localhost:3000/api/user/'
  signUp(userData:IUser){
    return this.http.post<any>(`${this.apiUrl}signup`,userData)
  }
  login(userData:IUser){
    return this.http.post<any>(`${this.apiUrl}login`,userData)
  }
}
