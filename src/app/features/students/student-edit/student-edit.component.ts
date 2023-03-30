import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  id!: number;
  student?: Student;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private studentsService: StudentsService)
  { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.searchStudent();
  }

  onUpdate() {
    this.studentsService.update(this.id, this.student!);
    this.router.navigateByUrl("/students");
  }

  private searchStudent() {
    this.student = this.studentsService.findById(this.id)
    this.student = JSON.parse(JSON.stringify(this.student));
  }
}