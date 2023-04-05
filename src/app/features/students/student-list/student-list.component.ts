import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentsService } from './../students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  constructor (private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  onDelete(id: number){
    console.log('delete', id);
    this.studentsService.deleteById(id).subscribe(() => {
      this.loadStudents();
    });
  }

  private loadStudents() {
    this.studentsService.findAll().subscribe(response => {
      this.students = response;
    });
  }
}
