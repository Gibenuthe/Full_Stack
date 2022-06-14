import { Component, OnInit } from '@angular/core';
import { Acolhedor } from 'src/app/models/acolhedor.model';
import { AcolhedorService } from 'src/app/services/acolhedor.service';

@Component({
  selector: 'app-add-acolhedor',
  templateUrl: './add-acolhedor.component.html',
  styleUrls: ['./add-acolhedor.component.css'],
})
export class AddAcolhedorComponent implements OnInit {
  acolhedor: Acolhedor = {
    nome: '',
    fone: '',
    email: '',
    pais: '',
    pessoas: 1,
    animais: false,
    idiomas: '',
  };
  submitted = false;

  constructor(private acolhedorService: AcolhedorService) {}

  ngOnInit(): void {}

  salvarAcolhedor(): void {
    const data = {
      nome: this.acolhedor.nome,
      fone: this.acolhedor.fone,
      email: this.acolhedor.email,
      pais: this.acolhedor.pais,
      pessoas: this.acolhedor.pessoas,
      animais: this.acolhedor.animais,
      idiomas: this.acolhedor.idiomas,
    };

    this.acolhedorService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  novoAcolhedor(): void {
    this.submitted = false;
    this.acolhedor = {
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
