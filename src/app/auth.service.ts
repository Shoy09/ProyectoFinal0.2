import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private userRole: 'admin' | 'external' | null = null;

  private readonly credentials = {
    admin: { username: 'admin', password: '123' },
    external: { username: 'external', password: '123' }
  };

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    console.log(`Attempting to log in with username: ${username}`);

    if (username === this.credentials.admin.username && password === this.credentials.admin.password) {
      this.isAuthenticated = true;
      this.userRole = 'admin';
      console.log('Login successful. Role: admin');
      this.router.navigate(['/admin']);
      return true;
    } else if (username === this.credentials.external.username && password === this.credentials.external.password) {
      this.isAuthenticated = true;
      this.userRole = 'external';
      console.log('Login successful. Role: external');
      this.router.navigate(['/inicio']);
      return true;
    } else {
      console.log('Login failed');
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.userRole = null;
    console.log('User logged out');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUserRole(): 'admin' | 'external' | null {
    return this.userRole;
  }

  isAdmin(): boolean {
    return this.userRole === 'admin';
  }
}
