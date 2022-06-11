import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
})
export class AddTutorialComponent implements OnInit {
  tutorial: Tutorial = {
    nome: '',
    fone: '',
    email: '',
    pais: '',
    pessoas: 1,
    animais: false,
    idiomas: '',
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {}

  saveTutorial(): void {
    const data = {
      nome: this.tutorial.nome,
      fone: this.tutorial.fone,
      email: this.tutorial.email,
      pais: this.tutorial.pais,
      pessoas: this.tutorial.pessoas,
      animais: this.tutorial.animais,
      idiomas: this.tutorial.idiomas,
    };

    this.tutorialService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      nome: '',
      fone: '',
      email: '',
      pais: '',
      pessoas: 1,
      animais: false,
      idiomas: '',
    };
  }
}
