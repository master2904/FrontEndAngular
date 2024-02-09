import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})

export class UsuarioFormComponent {
  constructor(public dialogRef:MatDialogRef<UsuarioFormComponent>, @ Inject (MAT_DIALOG_DATA) public data:Usuario){
    console.log(data)
  }
  agregar=new FormGroup({
    id: new FormControl('',[]),
    nombre: new FormControl('',[Validators.required])
  })
  get nombre(){
    return this.agregar.get('nombre')
  }
}
