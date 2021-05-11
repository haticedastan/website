import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { SystemComponent } from './system/system.component';
import { WebdevelopmentComponent } from './webdevelopment/webdevelopment.component';
import { DiaqnostikaComponent } from './diaqnostika/diaqnostika.component';
import { SatisComponent } from './satis/satis.component';
import { ContactComponent } from './contact/contact.component';
import { AdressComponent } from './adress/adress.component';
import { FooterComponent } from './footer/footer.component';
import { HardwareComponent } from './hardware/hardware.component';
import { SoftwareComponent } from './software/software.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HelpdeskComponent,
    SystemComponent,
    WebdevelopmentComponent,
    DiaqnostikaComponent,
    SatisComponent,
    ContactComponent,
    AdressComponent,
    FooterComponent,
    HardwareComponent,
    SoftwareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
