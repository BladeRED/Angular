import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  onSeConnecte(): void {


    //on appelle la méthode du service
    this.authService
    .signin('juleray@msn.com', 'azerty')
    .then(() => {this.router.navigateByUrl('products')})

  }

}
