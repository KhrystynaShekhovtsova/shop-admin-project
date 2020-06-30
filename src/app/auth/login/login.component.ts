import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { WhitespaceValidator } from '../../whitespace.validator';
import { AuthService } from 'src/app/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;
  returnUrl: string;
  error: string = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // if user is already logged in
    if (this.authService.isAuthentificated) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(9),
          WhitespaceValidator.noWhiteSpaces,
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(9),
          WhitespaceValidator.noWhiteSpaces,
        ],
      ],
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get form() {
    return this.loginForm.controls;
  }

  onSubmit(form) {
    this.submitted = true;
    this.loading = true;

    if (form.invalid) {
      this.loading = false;
      return;
    }
    const login = form.value.login;
    const password = form.value.password;

    let authObs: Observable<any>;

    authObs = this.authService.login(login, password);
    authObs.subscribe(
      (respData) => {
        this.loading = false;
        this.router.navigate([this.returnUrl]);
      },
      (errorMessage) => {
        this.error = errorMessage;
        this.loading = false;
      }
    );
    form.reset();
  }
}
