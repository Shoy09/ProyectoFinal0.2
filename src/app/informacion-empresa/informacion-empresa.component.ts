import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { InformacionContactoComponent } from "../informacion-contacto/informacion-contacto.component";
import { NuestraHistoriaComponent } from "../nuestra-historia/nuestra-historia.component";
import { NuestraMisionComponent } from "../nuestra-mision/nuestra-mision.component";
import { NuestrosValoresComponent } from "../nuestros-valores/nuestros-valores.component";
import { EquipoComponent } from "../equipo/equipo.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-informacion-empresa',
    standalone: true,
    templateUrl: './informacion-empresa.component.html',
    styleUrl: './informacion-empresa.component.css',
    imports: [HeroComponent, InformacionContactoComponent, NuestraHistoriaComponent, NuestraMisionComponent, NuestrosValoresComponent, EquipoComponent, NavbarComponent]
})
export class InformacionEmpresaComponent {
    heroTitle: string = 'Sobre Nuestra Empresa';
    heroDescription: string = 'Conoce más sobre nuestra historia, misión y valores.';
    showHeroButton: boolean = true; // Controla la visibilidad del botón en el componente ServiciosFinancierosComponent
    historia: string = 'nuestra historia comienza en el año [Año de Fundación], en el corazón de [Ciudad o País de Origen]. Fundada con la visión de [describir brevemente la visión], nuestra empresa ha recorrido un largo camino, transformándose de una pequeña startup en un líder de la industria [Sector o Industria].';
    mision: string = 'Nuestra misión es brindar soluciones financieras innovadoras y personalizadas que empoderen a individuos y empresas para alcanzar sus metas financieras. Nos comprometemos a proporcionar un servicio excepcional, guiado por los más altos estándares de integridad, transparencia y excelencia. Trabajamos en colaboración con nuestros clientes para asegurar un futuro financiero sólido y sostenible.';
    valores = [
        { title: 'Integridad', description: 'Actuamos con honestidad y transparencia en todas nuestras interacciones.' },
        { title: 'Innovación', description: 'Nos esforzamos por estar a la vanguardia de las soluciones financieras.' },
        { title: 'Compromiso', description: 'Estamos dedicados a proporcionar el mejor servicio a nuestros clientes.' },
        { title: 'Excelencia', description: 'Nos comprometemos a alcanzar la excelencia en todo lo que hacemos.' }
      ];
      equipoDescription: string = 'Nuestro equipo está compuesto por profesionales dedicados y experimentados en el campo financiero. Con una amplia experiencia en asesoramiento financiero, gestión de inversiones, planificación para el retiro y más, estamos aquí para ayudarte en cada paso de tu camino financiero. Nos comprometemos a brindarte un servicio excepcional y a trabajar contigo para alcanzar tus metas financieras.';
}
