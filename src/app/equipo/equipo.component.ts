import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css'
})
export class EquipoComponent {
  @Input() equipoDescription: string | undefined;

}
