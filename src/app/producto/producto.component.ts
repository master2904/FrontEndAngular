import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  productos:Producto[]=[]
  constructor(private productoService:ProductoService,public dialog: MatDialog,private toatr:ToastrService){}
  llenar_imagen(nombre:string):string{
    return 'http://localhost:8000/api/usuario/imagen/'+nombre
  }
  ngOnInit(): void {
    this.productoService.listar().subscribe(data=>{
      this.productos=data
    })
  }
  eliminar(item:Producto):void{
    this.toatr.info('complete el codigo correspondiente','Atencion')
  }

  actualizar(item:Producto) {
    let user:Producto
    this.toatr.warning('complete el codigo correspondiente','Atencion')
  }
}
