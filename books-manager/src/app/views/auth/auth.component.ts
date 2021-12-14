import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitAuthForm(): void {

    this.authService.signin('juleray@msn.com', 'azerty')
    .then(() => {

      this.router.navigateByUrl('/books')
    })
    //redirect to books view
  };
}

