import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  registrationForm: FormGroup;
  passwordmatch = false;
  mismatchMessage = false;
  errorMessage = false;
  constructor(private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required,
        Validators.pattern(environment.fullnameRegEx)]],
      email: ['', [Validators.required,
      Validators.pattern(environment.emailRegEx)]],
      password: ['', [Validators.required,
        Validators.pattern(environment.passwordRegEx)]],
      confirmPassword: ['', Validators.required],
    });
  }
  
  isValidInput(fieldName): boolean {
    return this.registrationForm.controls[fieldName].invalid &&
      (this.registrationForm.controls[fieldName].dirty || this.registrationForm.controls[fieldName].touched);
}
checkPassword() {
  let password1 = this.registrationForm.get('password').value;
  let password2 = this.registrationForm.get('confirmPassword').value;
  if (password1 == '') {
      // this.toaster.warning('Please enter Password');
    } else if (password2 == '') {
    this.mismatchMessage = false;
    this.errorMessage = false;
  }

  else if (password1 != password2) {
    this.passwordmatch=false;

      
      this.mismatchMessage = true;
      return false;
    } else if (password1 === password2 ) {
      this.mismatchMessage = false;
      this.errorMessage = false;
  } else {

    this.mismatchMessage = false;
    this.errorMessage = false;


  }

}
}
