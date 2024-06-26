import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosFinancierosComponent } from './servicios-financieros/servicios-financieros.component';
import { InformacionEmpresaComponent } from './informacion-empresa/informacion-empresa.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './auth.guard.spec';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard] },
    { path: 'servicios', component: ServiciosFinancierosComponent, canActivate: [AuthGuard] },
    { path: 'empresa', component: InformacionEmpresaComponent, canActivate: [AuthGuard] },
    { path: 'contacto', component: ContactoComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
    { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard] },
    { path: '**', component: NotFoundComponent }
]