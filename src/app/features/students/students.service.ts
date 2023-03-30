import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  apiUrl = `${environment.apiUrl}/students`;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService ) {
    }

  save(student: Student) {
    return this.http.post<Student>(this.apiUrl, student)
  }

  update(id: number, student: Student) {
    return this.http.put<Student>(`${this.apiUrl}/${id}`, student)
  }

  deleteById(id: number) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }

  findById(id: number) {
    return this.http.get<Student>(`${this.apiUrl}/${id}`)
  }

  findAll() {
    this.spinner.show();
    return this.http.get<Student[]>(this.apiUrl).pipe(
      // finalize(() => this.spinner.hide())
    );
  }
}
