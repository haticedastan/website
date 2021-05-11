import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AdressComponent} from './adress/adress.component';
import {ContactComponent} from  './contact/contact.component';
import {DiaqnostikaComponent} from './diaqnostika/diaqnostika.component';
import {HelpdeskComponent} from './helpdesk/helpdesk.component';
import {SatisComponent} from './satis/satis.component';
import {SystemComponent} from './system/system.component';
import {WebdevelopmentComponent} from './webdevelopment/webdevelopment.component';
import {HomeComponent } from './home/home.component';
import {HardwareComponent} from './hardware/hardware.component';
import {SoftwareComponent} from './software/software.component';


const routes: Routes = [
 { path:"home", component: HomeComponent},
 { path:"navbar" ,component:NavbarComponent},
 { path:"adress" ,component:AdressComponent},
 { path:"contact" ,component:ContactComponent},
 { path:"diaqnostika" ,component:DiaqnostikaComponent},
 { path:"helpdesk" ,component:HelpdeskComponent},
 { path:"satis" ,component:SatisComponent},
 { path:"system" ,component:SystemComponent},
 { path:"webdevelopment" ,component:WebdevelopmentComponent},
 { path:"hardware",component:HardwareComponent},
 { path:"software",component:SoftwareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
