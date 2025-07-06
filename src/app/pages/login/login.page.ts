import { addIcons } from 'ionicons';
import { logoWhatsapp } from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth.service';
import { LoginResponse } from 'src/app/interfaces/login-response.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonCheckbox, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonCheckbox, 
    IonButton, 
    IonIcon, 
    RouterLink,
    CommonModule, 
    ReactiveFormsModule 
  ]
})
export class LoginPage implements OnInit {

  private router = inject(Router);
  private fb = inject(FormBuilder);
  private loginService = inject(LoginService);

  public loginForm!: FormGroup;
  public msgForm: string = '';

  ngOnInit() {
    addIcons({ logoWhatsapp })
    this.initializeForm();
  }

  public initializeForm(): void {
    this.loginForm = this.fb.group({
      numberUser: ['', [ Validators.required, Validators.minLength(3) ]],
      password: ['', [ Validators.required, Validators.minLength(3) ]],
      termsAccepted: [false, [ Validators.requiredTrue ]],
      privacyAccepted: [false, [ Validators.requiredTrue ]]
    });
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      const { numberUser, password } = this.loginForm.value;
      this.loginService.login(numberUser, password).subscribe({
        next: (response: LoginResponse) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.participant));
          this.router.navigate(['/home']);
        },
        error: (error: any) => {
          this.msgForm = error.error.message || 'Login failed. Please try again.';
        }
      });
    } else {
      this.msgForm = 'Please fill in all required fields correctly.';
    }
  }
}