import { employees } from './../models/Emp.modal';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';  

@Injectable({
  providedIn: 'root'
})
export class EmpService 
{
  private apiUrl = "http://localhost:5000/api/employees"

  constructor(private http:HttpClient) { }

  getAllEmployee():Observable<employees[]>
  {
    return this.http.get<employees[]>(`${this.apiUrl}`);
  }

  getEmpById(id: number): Observable<any> 
  {
    return this.http.get<any[]>(`${this.apiUrl}/${id}`).pipe(
      map(res => res[0]) 
    );
  }
  
  updateEmployee(emp:employees,id:number):Observable<any>
  {
    return this.http.put(`${this.apiUrl}/${id}`,emp,{responseType:'text'});
  }

  addEmployee(emp:employees)
  {
    return this.http.post(`${this.apiUrl}`,emp);
  }

  deleteEmployee(empId:number)
  {
    return this.http.delete(`${this.apiUrl}/${empId}`,{responseType:'text'});
  }
}
