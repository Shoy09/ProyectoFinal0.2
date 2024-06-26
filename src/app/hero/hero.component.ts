import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() showButton: boolean = false; // Propiedad para controlar la visibilidad del botón
}
