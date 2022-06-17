import { Component, Input, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/acolhedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/models/acolhedor.model';

@Component({
  selector: 'app-dados-acolhedor',
  templateUrl: './dados-acolhedor.component.html',
  styleUrls: ['./dados-acolhedor.component.css'],
})
export class TutorialDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentTutorial: Tutorial = {
    nome: '',
    fone: '',
    email: '',
    pais: '',
    pessoas: 1,
    animais: false,
    idiomas: '',
  };

  message = '';

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params['id']);
    }
  }

  getTutorial(id: string): void {
    this.tutorialService.get(id).subscribe({
      next: (data) => {
        this.currentTutorial = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  updatePublished(status: boolean): void {
    const data = {
      nome: this.currentTutorial.nome,
      fone: this.currentTutorial.fone,
      email: this.currentTutorial.email,
      pais: this.currentTutorial.pais,
      pessoas: this.currentTutorial.pessoas,
      animais: this.currentTutorial.animais,
      idiomas: this.currentTutorial.idiomas,
    };

    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, data).subscribe({
      next: (res) => {
        console.log(res);
        //this.currentTutorial.published = status;
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e),
    });
  }

  updateTutorial(): void {
    this.message = '';

    this.tutorialService
      .update(this.currentTutorial.id, this.currentTutorial)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e),
      });
  }

  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/tutorials']);
      },
      error: (e) => console.error(e),
    });
  }
}
