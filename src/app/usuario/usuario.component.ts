import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import Swal from 'sweetalert2';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{
  usuarios:Usuario[]=[]
  datos:number[]=[]
  cadena:string[]=[]
  constructor(private usuarioService:UsuarioService,public dialog: MatDialog,private toatr:ToastrService){}
  llenar_imagen(nombre:string):string{
    return 'http://localhost:8000/api/usuario/imagen/'+nombre
  }
  ngOnInit(): void {
    this.datos=this.usuarioService.listar()
    this.cadena=this.usuarioService.listar_cadenas()
    console.log(this.datos,this.cadena)
    this.usuarioService.listar_usuarios().subscribe(data=>{
      this.usuarios=data
      console.log(data)
    })
  }
  eliminar(item:Usuario):void{
    Swal.fire({
      title: 'Seguro de Eliminar este registro?',
      text: item.apellido+" "+item.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      confirmButtonColor:'#3085d6',
      cancelButtonText: 'Cancelar',
      cancelButtonColor:'#d33'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
            icon: "success",
            title: "Satisfactorio",
            text: "Usuario Eliminado Correctamente",
            showConfirmButton: false,
            timer: 1500
        });
        this.usuarioService.eliminar(item.id).subscribe(data=>{
          this.usuarios=data
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo eliminar el usuario",
          showConfirmButton: false,
          timer: 1500
        })
          // 'Error', 'No se elimino el registro', 'error');
      }
    });
  }
  successNotification() {
    Swal.fire('Hi', 'We have been informed!', 'success');
  }
  alertConfirmation() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Product removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Error', 'Product still in our database.)', 'error');
      }
    });
  }
  openDialog() {
    let user:Usuario
    user={
      id:0,
      nombre:'',
      apellido:'',
      username:'',
      password:'',
      imagen:'',
      email:''
    }
    const dialogRef = this.dialog.open(UsuarioFormComponent,{data:user});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result.value);
      user={
        id:0,
        nombre:result.value.nombre,
        apellido:result.value.apellido,
        username:result.value.username,
        password:result.value.password,
        imagen:result.value.imagen,
        email:result.value.email
      }
      this.usuarioService.agregar(user).subscribe(data=>{
        this.usuarios=data
        this.toatr.success('Exito','Registro Guardado')
      },
      error=>{
        this.toatr.error('Error','Operacion Fallida')

      })
    });
  }

  actualizar(item:Usuario) {
    let user:Usuario
    const dialogRef = this.dialog.open(UsuarioFormComponent,{data:item});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result.value);
      user={
        id:item.id,
        nombre:result.value.nombre,
        apellido:result.value.apellido,
        username:result.value.username,
        password:result.value.password,
        imagen:result.value.imagen,
        email:result.value.email
      }
      this.usuarioService.actualizar(user,item.id).subscribe(data=>{
        this.usuarios=data
        this.toatr.success('Exito','Registro Actualizado')
      },
      error=>{
        this.toatr.error('Error','Operacion Fallida')

      })
    });
  }
}
