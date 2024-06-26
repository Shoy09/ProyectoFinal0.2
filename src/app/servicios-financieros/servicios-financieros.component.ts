import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { ServiciosComponent } from "../servicios/servicios.component";
import { InformacionContactoComponent } from "../informacion-contacto/informacion-contacto.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-servicios-financieros',
    standalone: true,
    templateUrl: './servicios-financieros.component.html',
    styleUrl: './servicios-financieros.component.css',
    imports: [HeroComponent, ServiciosComponent, InformacionContactoComponent, NavbarComponent]
})
export class ServiciosFinancierosComponent {
    heroTitle: string = 'Nuestros Servicios Financieros';
    heroDescription: string = 'Explora las soluciones financieras que ofrecemos para ayudarte a alcanzar tus metas.';
    showHeroButton: boolean = true; // Controla la visibilidad del botón en el componente ServiciosFinancierosComponent
  
    servicios = [
        { title: 'Asesoramiento Financiero Personalizado', description: 'Nuestros expertos están aquí para ofrecerte asesoramiento financiero personalizado adaptado a tus necesidades únicas.' },
        { title: 'Gestión de Inversiones', description: 'Te ayudamos a crear una estrategia de inversión sólida para maximizar tus rendimientos y minimizar riesgos.' },
        { title: 'Planificación para el Retiro', description: 'Trabajamos contigo para diseñar un plan de retiro que te permita disfrutar de una jubilación cómoda y segura.' },
        { title: 'Servicios de Préstamos', description: 'Ofrecemos una variedad de opciones de préstamos para ayudarte a financiar tus proyectos y necesidades.' },
        { title: 'Educación Financiera', description: 'Proporcionamos recursos educativos para ayudarte a comprender y gestionar mejor tus finanzas.' },
        { title: 'Educación de inversiones', description: 'Proporcionamos recursos educativos para ayudarte a comprender y gestionar mejor tus finanzas.' }


    ];

}
