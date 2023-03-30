import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css']
})
export class StudentNewComponent implements OnInit {

  student: Student = new Student();
  constructor (private router: Router, private studentsService: StudentsService) {

  }
  ngOnInit(): void {
  }

  onSubmit() {
    this.studentsService.save(this.student).subscribe(() => {
      this.router.navigateByUrl("/students");
    })
  }

  isValid() {
    if (!this.student.name || !this.student.email || !this.student.birthday) {
      return false;
    }

    return true;
  }
}
