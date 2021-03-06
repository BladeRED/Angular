import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;
  errMsg!:string;


  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.email = 'contact@thomaschevalier.fr';
    this.password = 'azerty';
  }

  onSubmitAuthForm(): void {
this.errMsg = '';

    this.authService
    .signIn(this.email, this.password)
    .then(() => {this.router.navigateByUrl('offers')})
    .catch(err => this.errMsg = err.error.errorMsg)
  }

}
