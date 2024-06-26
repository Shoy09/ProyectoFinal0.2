import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nuestra-mision',
  standalone: true,
  imports: [],
  templateUrl: './nuestra-mision.component.html',
  styleUrl: './nuestra-mision.component.css'
})
export class NuestraMisionComponent {
  @Input() mision: string | undefined;
}
