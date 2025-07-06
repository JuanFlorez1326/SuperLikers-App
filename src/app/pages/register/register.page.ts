import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth.service';
import { Register } from 'src/app/interfaces/register.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    RouterLink, 
    IonButton,
    CommonModule, 
    ReactiveFormsModule, 
  ]
})
export class RegisterPage implements OnInit {

  private fb = inject(FormBuilder);
  private loginService = inject(LoginService);

  public registerForm!: FormGroup;
  public msgForm: string = '';

  ngOnInit() {
    this.initializeForm();
  }

  public initializeForm(): void {
    this.registerForm = this.fb.group({
      email: ['', [ Validators.required, Validators.minLength(3), Validators.email ]],
      fullname: ['', [ Validators.required, Validators.minLength(3) ]],
      code: ['', [ Validators.required, Validators.minLength(3) ]],
    });
  }

  public onSubmit(): void {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;

      const participantData: Register = {
        campaign: '4u',
        not_send_verify_registration: true,
        properties: {
          email: formData.email,
          fullname: formData.fullname,
          code: formData.code
        }
      };

      this.loginService.register(participantData).subscribe({
        next: (response: { ok: string, message: string }) => {
          this.msgForm = response.message;
          this.registerForm.reset();
        },
        error: (error) => {
          this.msgForm = error.error.message;
        }
      });
    } else {
      this.msgForm = 'Please fill in all required fields correctly.';
    }
  }

}
