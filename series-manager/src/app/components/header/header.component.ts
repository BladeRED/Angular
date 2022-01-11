import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isConnected!: boolean;
  tokenSub!: Subscription;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.tokenSub = this.loginService.token.subscribe(
      (newTokenValue: string) => {
        this.isConnected = !!newTokenValue;
      }
    );
  }

  onClickSignOut(): void {
    this.loginService.signOut().then(() => {
      this.router.navigateByUrl('');
    });
  }

  ngOnDestroy(): void {
    this.tokenSub.unsubscribe();
  }
}
