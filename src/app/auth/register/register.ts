import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    RouterLink 
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  registerForm: FormGroup;

  constructor(
    private auth: Auth,
    private router: Router
  ) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.auth.register(this.registerForm.value).subscribe({
      next: () => {
        alert('Registo efetuado com sucesso! Por favor, faça login.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Erro no registo:', err);
        alert(`Falha no registo: ${err.error.message || 'Tente novamente.'}`);
      }
    });
  }
}