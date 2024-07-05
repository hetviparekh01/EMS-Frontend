import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

constructor(private http:HttpClient) { }
  apiUrl='http://localhost:3000/api/register/';
  registerEvent(registerData:any){
    return this.http.post<any>(`${this.apiUrl}registerevent`,registerData)
  }
  getRegisterEventByUserId(){
    return this.http.get<any>(`${this.apiUrl}getuserevent`)
  }
}
