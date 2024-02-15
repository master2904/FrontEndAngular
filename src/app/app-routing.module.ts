import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoComponent } from './producto/producto.component';
import { VentaComponent } from './venta/venta.component';
import { TransaccionComponent } from './transaccion/transaccion.component';
const routes: Routes = [
  {path:'usuario',component:UsuarioComponent},
  {path:'categoria',component:CategoriaComponent},
  {path:'producto',component:ProductoComponent},
  {path:'cliente',component:ClienteComponent},
  {path:'venta',component:VentaComponent},
  {path:'transaccion',component:TransaccionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
