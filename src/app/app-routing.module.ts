import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarizacionComponent } from './calendarizacion/calendarizacion.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HistoriaComponent } from './historia/historia.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { OrganizacionComponent } from './organizacion/organizacion.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'Galeria',component: GaleriaComponent},
  {path:'Nosotros',component:NosotrosComponent},
  {path:'Organizacion',component:OrganizacionComponent},
  {path:'Historia',component:HistoriaComponent},
  {path:'Calendarizacion',component:CalendarizacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }