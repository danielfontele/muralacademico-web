import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from '../../guards/auth-guard.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  private formSubmitAttempt: boolean; // {2}
  hide = true;
  constructor(
    private fb: FormBuilder,         // {3}
    private authService: AuthGuardService, // {4}
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({     // {5}
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.formLogin.get(field).valid && this.formLogin.get(field).touched) ||
      (this.formLogin.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit(): void {
    if (this.formLogin.valid) {
      this.authService.login(this.formLogin.value); // {7}
      this.router.navigate(['/postagem']);
    }
    this.formSubmitAttempt = true;             // {8}
  }

  consoleLogins() {
    this.authService.tempUsers();
  }
}
