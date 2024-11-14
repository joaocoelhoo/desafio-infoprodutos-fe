import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl + '/api/users';
  private registerApiUrl = environment.apiUrl + '/api/register';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );
    return this.http.get<{ data: any[]}>(this.apiUrl, { headers }).pipe(
      map(response => response.data)
    );
  }

  create(user: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );
    return this.http.post<any>(this.registerApiUrl, user, { headers });
  }

  update(id: number, user: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );
    return this.http.put<any>(`${this.apiUrl}/${id}`, user, { headers });
  }

  delete(id: number): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers });
  }

  assignRole(userId: number, roleId: number): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );
    return this.http.post<any>('/api/assign-role', { id: userId, roleId: roleId }, { headers });
  }
}
