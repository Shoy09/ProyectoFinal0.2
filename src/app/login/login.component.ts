import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,
    FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    console.log(`Login component: attempting login with username: ${this.username}`);

    if (this.authService.login(this.username, this.password)) {
      const userRole = this.authService.getUserRole();
      console.log(`Login component: login successful, role: ${userRole}`);
      if (userRole === 'admin') {
        this.router.navigate(['/admin']);
      } else if (userRole === 'external') {
        this.router.navigate(['/inicio']);
      }
    } else {
      this.errorMessage = 'Credenciales invalidas';
      console.log('Login component: login failed, invalid credentials');
    }
  }
}