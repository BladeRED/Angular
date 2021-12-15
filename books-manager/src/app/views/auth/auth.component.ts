import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  email!:string;
  password!:string;
  errMsg!:string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.email = 'juleray@msn.com'
    this.password = 'cacaprout'
  }

  onSubmitAuthForm(): void {
    this.errMsg ='';

    this.authService.signin(this.email, this.password)
    .then(() => {
      //redirect to books view
      this.router.navigateByUrl('/books')
    })
    .catch((errMsg) => {//reject})
      this.errMsg = errMsg;
  })
};
}

