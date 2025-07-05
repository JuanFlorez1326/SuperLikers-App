import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonCheckbox, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoWhatsapp } from 'ionicons/icons';
import { LoginService } from 'src/app/services/login.service';
import { LoginResponse } from 'src/app/interfaces/login-response.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, IonCheckbox, IonButton, IonIcon, ReactiveFormsModule ]
})
export class LoginPage implements OnInit {

  private router = inject(Router);
  private fb = inject(FormBuilder);
  private loginService = inject(LoginService);

  public loginForm!: FormGroup;

  ngOnInit() {
    addIcons({ logoWhatsapp })
    this.initializeForm();
  }

  public initializeForm() {
    this.loginForm = this.fb.group({
      numberUser: ['', [ Validators.required, Validators.minLength(3) ]],
      password: ['', [ Validators.required, Validators.minLength(6) ]],
      termsAccepted: [false, Validators.requiredTrue],
      privacyAccepted: [false, Validators.requiredTrue]
    });
  }

  public onSubmit() {
    if (this.loginForm.valid) {
      const { numberUser, password } = this.loginForm.value;
      this.loginService.login(numberUser, password).subscribe({
        next: (response: LoginResponse) => {
          console.log('Login successful', response);
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.participant));
          this.router.navigate(['/home']);
        },
        error: (error: any) => {
          console.error('Login failed', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
