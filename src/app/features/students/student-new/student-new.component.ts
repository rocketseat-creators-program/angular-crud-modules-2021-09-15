import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css']
})
export class StudentNewComponent implements OnInit {

  student: Student = new Student();

  constructor(
    private router: Router,
    private studentService: StudentsService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.studentService.save(this.student);
    this.router.navigateByUrl("/students");
  }


}
