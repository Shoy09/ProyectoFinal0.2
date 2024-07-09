import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';

import { NotFoundComponent } from './Complementos/not-found/not-found.component';
import { AdoptaComponent } from './componentes/adopta/adopta.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { SedesComponent } from './componentes/sedes/sedes.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent},
    { path: 'adopta', component: AdoptaComponent},
    { path: 'nosotros', component: NosotrosComponent},
    { path: 'sedes', component: SedesComponent},
    { path: 'servicios', component: ServiciosComponent},
    { path: '**', component: NotFoundComponent }
]