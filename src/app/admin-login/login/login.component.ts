import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userId = 'SHADJGS8738JIHJG';
  loginForm: FormGroup;
  constructor(private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    sessionStorage.removeItem('tokenadmintoken');
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,
      Validators.pattern(environment.emailRegEx)]],
      password: ['', Validators.required]
    });
  }
  
  isValidInput(fieldName): boolean {
    return this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
}
  login() {
    this.router.navigate(['/admin/dashboard']);
    sessionStorage.setItem('tokenadmintoken', this.userId);
  }
}
