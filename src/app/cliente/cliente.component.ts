import { Component, OnInit } from '@angular/core';
import { ClienteService} from '../services/cliente.service';
import { Cliente } from '../models/cliente';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  clientes:Cliente[]=[]
  constructor(private clienteServicio:ClienteService,public dialog: MatDialog,private toastr:ToastrService){}
  ngOnInit(): void {
    this.clienteServicio.listar().subscribe(data=>{
      this.clientes=data
    })
  }
  eliminar(item:Cliente):void{
    this.toastr.info('Complete el codigo correspondiente','Atencion')
  }
  actualizar(item:Cliente):void{
    this.toastr.warning('Complete el codigo correspondiente','Atencion')
  }
}
