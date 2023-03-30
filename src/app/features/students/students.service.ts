import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students: Student[] = []
  constructor() {
    this.loadStudents();
  }

  save(student: Student) {
    student.id = this.nextId();
    this.students.push(student);
  }

  update(id: number, student: Student) {
    const index = this.students.findIndex(student => student.id === id);
    this.students.splice(index, id, student);
  }

  deleteById(id: number) {
    const index = this.students.findIndex(student => student.id === id);
    this.students.splice(index, id);
  }

  findById(id: number) {
    return this.students.find(student => student.id == id);
  }

  findAll() {
    return this.students;
  }

  private nextId() {
    let lastId = 0;
    if(this.students.length > 0) {
      lastId = Math.max(...this.students.map(student => student.id));
  }
  return ++lastId;
  }

  private loadStudents() {
    this.students.push(new Student(1, 'Ana', 'ana@gmail.com', '2001-04-23 '));
    this.students.push(new Student(2, 'Julia', 'julia@gmail.com', '2003-12-09 '));
    this.students.push(new Student(3, 'Pedro', 'pedro@gmail.com', '2002-06-13 '));
    // this.students.push(new Student(1, 'Vitória', 'vitoria@gmail.com', '2001-11-22 '));
    // this.students.push(new Student(1, 'Beatriz', 'bia@gmail.com', '2003-05-05 '));
    // this.students.push(new Student(1, 'Augusto', 'guto@gmail.com', '2004-04-24 '));
    // this.students.push(new Student(1, 'Aline', 'aline@gmail.com', '2000-02-19 '));
    // this.students.push(new Student(1, 'João', 'joca@gmail.com', '2000-10-30 '));
  }
}
