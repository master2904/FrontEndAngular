import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent{
  title = 'barchartApp';
  dataset = [
    { name: "X", value: 1 },
    { name: "Y", value: 2 }
  ];
  gdpData = [
    { name: "Punjab", value: 925 },
    { name: "Sindh", value: 362 },
    { name: "Khyber Pakhtunkhwa", value: 160 },
    { name: "Balochistan", value: 84 },
    { name: "Azad Jammu and Kashmir", value: 30 },
    { name: "Islamabad (ICT)", value: 15 },
    { name: "Gilgit-Baltistan", value: 10 },
  ];
}
