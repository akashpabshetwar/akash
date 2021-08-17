import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forgot-passsword',
  templateUrl: './forgot-passsword.component.html',
  styleUrls: ['./forgot-passsword.component.scss']
})
export class ForgotPassswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required,
      Validators.pattern(environment.emailRegEx)]],
    });
  }
  
  isValidInput(fieldName): boolean {
    return this.forgotPasswordForm.controls[fieldName].invalid &&
      (this.forgotPasswordForm.controls[fieldName].dirty || this.forgotPasswordForm.controls[fieldName].touched);
}
}
