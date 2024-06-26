import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nuestros-valores',
  standalone: true,
  imports: [],
  templateUrl: './nuestros-valores.component.html',
  styleUrl: './nuestros-valores.component.css'
})
export class NuestrosValoresComponent {
  @Input()
  valores!: { title: string; description: string; }[];

}
