import { Component, OnInit } from '@angular/core';
import { Acolhedor } from 'src/app/models/acolhedor.model';
import { AcolhedorService } from 'src/app/services/acolhedor.service';

@Component({
  selector: 'app-lista-acolhedor',
  templateUrl: './lista-acolhedor.component.html',
  styleUrls: ['./lista-acolhedor.component.css']
})
export class ListaAcolhedorComponent implements OnInit {

  acolhedores?: Acolhedor[];
  currentAcolhedor: Acolhedor = {};
  currentIndex = -1;
  pais = '';

  constructor(private acolhedorService: AcolhedorService) { }

  ngOnInit(): void {
    this.retrieveAcolhedores();
  }

  retrieveAcolhedores(): void {
    this.acolhedorService.getAll()
      .subscribe({
        next: (data) => {
          this.acolhedores = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveAcolhedores();
    this.currentAcolhedor = {};
    this.currentIndex = -1;
  }

  setActiveAcolhedor(acolhedor: Acolhedor, index: number): void {
    this.currentAcolhedor = acolhedor;
    this.currentIndex = index;
  }

  removeAllAcolhedores(): void {
    this.acolhedorService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchCountry(): void {
    this.currentAcolhedor = {};
    this.currentIndex = -1;

    this.acolhedorService.findByCountry(this.pais)
      .subscribe({
        next: (data) => {
          this.acolhedores = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
