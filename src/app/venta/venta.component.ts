import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { VentaService } from '../services/venta.service';
import { Venta } from '../models/venta';
import { Categoria } from '../models/categoria';
import { Cliente } from '../models/cliente';
import { Producto } from '../models/producto';
import { CategoriaService } from '../services/categoria.service';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit{
  categorias:Categoria[]=[]
  clientes:Cliente[]=[]
  productos:Producto[]=[]
  constructor(
    private categoriaServicio:CategoriaService,
    private clientesServicio:ClienteService,
    private toastr:ToastrService
  ){}
  ngOnInit(): void {
    this.categoriaServicio.listar().subscribe(data=>{
      this.categorias=data
      console.log(this.categorias)
    })
    this.clientesServicio.listar().subscribe(data=>{
      this.clientes=data
      console.log(this.clientes)

    })
  }
  listarProductos(id:number):void{
    this.categoriaServicio.productos(id).subscribe(data=>{
      this.productos=data
    })
  }
}
