import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FooterColegioComponent} from './footer-colegio/footer-colegio.component'
import { HistoriaComponent } from './historia/historia.component';
import { CalendarizacionComponent } from './calendarizacion/calendarizacion.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterColegioComponent,
    NavbarComponent,
    GaleriaComponent,
    NosotrosComponent,
    HomeComponent,
    HistoriaComponent,
    CalendarizacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
