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
    private studentService: StudentsService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.searchStudent();
  }

  onUpdate() {
    this.studentService.update(this.id, this.student!);
    this.router.navigateByUrl("/students");
  }

  private searchStudent() {
    const student = this.studentService.findById(this.id);

    /*
      Mini hack para alterar a referência da váriavel student com a que esta na lista do service.
      Motivo: Como a alteração estava fazendo referência ao que esta na lista, qualquer alteração no form
      estava alterando os valores do aluno na lista. A ideia é que essas alterações só sejam feitas quando
      clicar no botão 'Save'.
    */
    this.student = JSON.parse(JSON.stringify(student));

  }

}
