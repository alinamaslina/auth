import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router) {}
  onRegister() {
    this.auth.register(this.username, this.password);
    this.router.navigate(['/login']);
  }
}
