import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isConnected!: boolean;
  tokenSub!: Subscription;

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {

this.tokenSub = this.authService.token
.subscribe((newTokenValue: string) => {this.isConnected = !!newTokenValue})


//Solution 1



console.log("On passe dans le ngOnInitduHeader")

// Solution 2

// this.isConnected = this.authService.token ? true : false;


  }

  onClickSignOut(): void {

this.authService.signOut()
.then(() => {this.router.navigateByUrl('')})



  }

  ngOnDestroy(): void {
      this.tokenSub.unsubscribe();
  }

}
