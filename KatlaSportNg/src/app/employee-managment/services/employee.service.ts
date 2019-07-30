import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { EmployeeFullInfo } from '../models/employee-full-info';
import { EmployeeBriefInfo } from '../models/employee-brief-info';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = environment.apiUrl + 'api/employees/';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Array<EmployeeBriefInfo>> {
    return this.http.get<Array<EmployeeBriefInfo>>(this.url);
  }

  getSubordinates(employeeId:number): Observable<Array<EmployeeFullInfo>> {
    return this.http.get<Array<EmployeeFullInfo>>(`${this.url}${employeeId}/subordinates`);
  }

  getEmployee(employeeId: number): Observable<EmployeeFullInfo> {
    return this.http.get<EmployeeFullInfo>(`${this.url}${employeeId}`);
  }

  addEmployee(employee: EmployeeFullInfo, filetoUpload:File) {
    const formData=new FormData();
    formData.append('Image',filetoUpload);
    formData.append('data',JSON.stringify(employee));
    return this.http.post(`${this.url}`,formData);
  }

  updateEmployee(employee: EmployeeFullInfo, filetoUpload:File) {
    const formData=new FormData();
    formData.append('Image',filetoUpload);
    formData.append('data',JSON.stringify(employee));
    return this.http.put(`${this.url}${employee.id}`,formData);
  }

  deleteEmployee(employeeId: number): Observable<Object> {
    return this.http.delete<Object>(`${this.url}${employeeId}`);
  }
}
