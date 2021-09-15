import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  onDelete(id: number) {
    this.studentService.deleteById(id);
  }

  private loadStudents() {
    this.students = this.studentService.findAll();
  }

}
