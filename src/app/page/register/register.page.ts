import { Component, Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { UserI, UserRegisterI, UserResponseI } from '../auth/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage  {
  private _fb = inject(FormBuilder)
  private _authSvc = inject(UsersService)
  private _router = inject(Router)
  private subscribe: Subscription = new Subscription();
  hide = true;
  constructor() { }

  registerForm = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    age : ['', [Validators.required]],
    password: ['', [Validators.required]]
  })
  ngOnInit() {
  }
  
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
  onRegister() {
    if (this.registerForm.valid) {
      const user: UserRegisterI = {
        email: this.registerForm.value.email,
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        age: parseInt(this.registerForm.value.age),
        password: this.registerForm.value.password
      };
      this.subscribe.add(
        this._authSvc.newUser(user).pipe(
          tap((res) => {
            console.log(res);
            this._router.navigate(['/login']);
          }),
        ).subscribe()
      );
    }
  }
}
