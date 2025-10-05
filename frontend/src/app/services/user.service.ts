import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User.modal';

@Injectable({
  providedIn: 'root'
})
export class UserService 
{
  private apiUrl = "http://localhost:5000/api/users";

  constructor(private http:HttpClient) 
  { }

  register(user:User)
  {
    return this.http.post(`${this.apiUrl}/register`,user);
  }

  login(user:User)
  {
    return this.http.post(`${this.apiUrl}/login`,user);
  }

}
