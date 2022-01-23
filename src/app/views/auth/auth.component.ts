import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AuthComponent implements OnInit {
  login!: string;
  password!: string;
  errMsg!: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.login = "votre nom d'utilisateur";
    this.password = 'azerty';
  }

  onSubmitAuthForm(): void {
    this.errMsg = '';
    this.authService
      .signIn(this.login, this.password)
      .then(() => {
        this.router.navigateByUrl('/series');
      })
      .catch((errMsg) => {
        this.errMsg = errMsg;
      });
  }
}
