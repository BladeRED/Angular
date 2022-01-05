import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!:string;
  password!:string;
  errMsg!:string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

    this.user = 'Administrateur'
    this.password = 'azerty'
  }

  onSubmitLogForm(): void {
    this.errMsg ='';

    this.loginService.signin(this.user, this.password)
    .then(() => {
      //redirect to books view
      this.router.navigateByUrl('/series')
    })
    .catch((errMsg) => {//reject})
      this.errMsg = errMsg;
  })
};
}


