import {Component, OnInit} from '@angular/core';
import {AuthService} from '@security/service/auth.service';
import {SigninPayload} from '@security/model';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm!: FormGroup;

  constructor(public auth: AuthService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.signInForm = new FormGroup({
      /*
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
      */
    });
  }

  signin() {
    const payload: SigninPayload = {
      username: (this.signInForm.value.username).toLowerCase(),
      password: this.signInForm.value.password
    };
    this.auth.signin(payload).subscribe()
  }
}
