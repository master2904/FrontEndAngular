import { Component, OnInit } from '@angular/core';
import { ClienteService} from '../services/cliente.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../models/categoria';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  categorias:Categoria[]=[]
  constructor(private categoriaServicio:CategoriaService,public dialog: MatDialog,private toastr:ToastrService){}
  ngOnInit(): void {
    this.categoriaServicio.listar().subscribe(data=>{
      this.categorias=data
    })
  }
  eliminar(item:Categoria):void{
    this.toastr.info('Complete el codigo correspondiente','Atencion')
  }
  actualizar(item:Categoria):void{
    this.toastr.warning('Complete el codigo correspondiente','Atencion')
  }

}
