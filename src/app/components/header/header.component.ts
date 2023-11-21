import { Component, Input, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { AuthService } from 'src/app/page/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  @Input() title: string='';
  @Input() formAnterior: string='';
 private  _authSvc = Inject(AuthService);
  constructor() { }

  ngOnInit() {}
  logOut(){
    this._authSvc.logOut();
  }

}
