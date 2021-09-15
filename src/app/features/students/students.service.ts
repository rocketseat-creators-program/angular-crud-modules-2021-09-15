import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students: Student[] = [];

  constructor() {
    this.loadStudents();
  }

  save(student: Student) {
    student.id = this.nextId();
    this.students.push(student);
  }

  update(id: number, student: Student) {
    const index = this.students.findIndex(s => s.id == id);
    this.students.splice(index, 1, student);
  }

  deleteById(id: number) {
    const index = this.students.findIndex(s => s.id == id);
    this.students.splice(index, 1);
  }

  findById(id: number) {
    return this.students.find(s => s.id == id);
  }

  findAll() {
    return this.students;
  }

  private nextId() {
    let lastId = 0;
    if (this.students.length > 0) {
      lastId = Math.max(...this.students.map(student => student.id));
    }

    return ++lastId;
  }

  private loadStudents() {
    this.students.push(new Student(1, 'Ana', 'ana@gmail.com', '2001-04-01'));
    this.students.push(new Student(2, 'Pedro', 'pedro@gmail.com', '2000-08-28'));
    this.students.push(new Student(3, 'Marcia', 'marcia@gmail.com', '2002-08-21'));
    this.students.push(new Student(4, 'Marcos', 'marcos@gmail.com', '2003-05-17'));
    this.students.push(new Student(5, 'Victor', 'victor@gmail.com', '1993-04-12'));
    this.students.push(new Student(6, 'Vanessa', 'vanessa@gmail.com', '2003-08-09'));
    this.students.push(new Student(7, 'Mariana', 'mariana@gmail.com', '2000-11-06'));
    this.students.push(new Student(8, 'Bernardo', 'bernardo@gmail.com', '1995-02-27'));
  }

}
