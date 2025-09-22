import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private auth: Auth,
    private router: Router
  ){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.auth.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log('Login bem-sucedido!', response);

        localStorage.setItem('accessToken', response.accessToken);

        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Erro no login:', err);
        alert('Falha no login. Verifique suas credenciais.');
      }
    });
  }
}

