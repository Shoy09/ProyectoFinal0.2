import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nuestra-historia',
  standalone: true,
  imports: [],
  templateUrl: './nuestra-historia.component.html',
  styleUrl: './nuestra-historia.component.css'
})
export class NuestraHistoriaComponent {
  @Input() historia: string | undefined;

}
