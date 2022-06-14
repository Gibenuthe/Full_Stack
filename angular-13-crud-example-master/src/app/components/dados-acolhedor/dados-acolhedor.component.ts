import { Component, Input, OnInit } from '@angular/core';
import { AcolhedorService } from 'src/app/services/acolhedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Acolhedor } from 'src/app/models/acolhedor.model';

@Component({
  selector: 'app-dados-acolhedor',
  templateUrl: './dados-acolhedor.component.html',
  styleUrls: ['./dados-acolhedor.component.css'],
})
export class DadosAcolhedorComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentAcolhedor: Acolhedor = {
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
    private acolhedorService: AcolhedorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getAcolhedor(this.route.snapshot.params['id']);
    }
  }

  getAcolhedor(id: string): void {
    this.acolhedorService.get(id).subscribe({
      next: (data) => {
        this.currentAcolhedor = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  updatePublished(status: boolean): void {
    const data = {
      nome: this.currentAcolhedor.nome,
      fone: this.currentAcolhedor.fone,
      email: this.currentAcolhedor.email,
      pais: this.currentAcolhedor.pais,
      pessoas: this.currentAcolhedor.pessoas,
      animais: this.currentAcolhedor.animais,
      idiomas: this.currentAcolhedor.idiomas,
    };

    this.message = '';

    this.acolhedorService.update(this.currentAcolhedor.id, data).subscribe({
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

  updateAcolhedor(): void {
    this.message = '';

    this.acolhedorService
      .update(this.currentAcolhedor.id, this.currentAcolhedor)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'Acolhedor atualizado com sucesso!';
        },
        error: (e) => console.error(e),
      });
  }

  deleteAcolhedor(): void {
    this.acolhedorService.delete(this.currentAcolhedor.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/acolhedores']);
      },
      error: (e) => console.error(e),
    });
  }
}
