import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { UserI } from './user';
import { Router } from '@angular/router';
import { Subscription, catchError, tap } from 'rxjs';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit, OnDestroy {
  private _fb = inject(FormBuilder)
  private _authSvc = inject(AuthService)
  private _router = inject(Router)
  private subscribe: Subscription = new Subscription();
  private isValidEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  public alertButtons = ['OK'];
  hide = true;
  constructor() { }

  loginForm = this._fb.group({
    email: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
    password: ['', [Validators.required]]
  })
  ngOnInit() {
  }


  

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
  onLogin() {
    if (this.loginForm.valid) {
      const user: UserI = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      // if suscribe error send alert

      this.subscribe.add(
        this._authSvc.login(user).pipe(
          tap((res) => {
            console.log(res);
            this.loginForm.reset();
            this._router.navigate(['/home']);
          }),
          catchError((err, caught) => {
            console.log(err);
            this.onAlert();
            throw err;
          }),

        ).subscribe()
      )
      // if suscribe error send alert
    }
  }
  async onAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'ERROR';
    alert.subHeader = 'CORREO O CONTRASEÑA INVALIDOS';
    alert.message = 'Por favor verifique sus datos';
    alert.buttons = this.alertButtons;

    document.body.appendChild(alert);
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
}
