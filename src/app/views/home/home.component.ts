import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataNasa: any;
  contenido: any;

  constructor(private api: HomeService) { }

  ngOnInit() {
    this.api.get('').subscribe((data: any[]) => {
      this.dataImagenDelDiaNasa(data);
    }, err => {
      console.error(err);
    });
  }

  dataImagenDelDiaNasa(data) {
    if (data.url !== '') {
      this.dataNasa = data;
      this.contenido = true;
    }
  }

}
