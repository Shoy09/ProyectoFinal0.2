import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  userRole: 'admin' | 'external' | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userRole = this.authService.getUserRole();
  }
}