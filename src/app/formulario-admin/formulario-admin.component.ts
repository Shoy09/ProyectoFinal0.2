import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-admin',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule ],
  templateUrl: './formulario-admin.component.html',
  styleUrl: './formulario-admin.component.css'
})
export class FormularioAdminComponent implements OnInit {
  @Input() campos: any[] = []; // Definimos los campos del formulario como una lista de objetos

  constructor() { }

  ngOnInit(): void {
  }
}