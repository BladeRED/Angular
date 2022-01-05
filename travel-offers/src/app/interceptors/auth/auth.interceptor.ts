import { Injectable, OnDestroy } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor, OnDestroy {
  token!: string;
  tokenSubscription: Subscription;

  constructor(private authService: AuthService) {
    this.tokenSubscription = this.authService.token.subscribe(
      (token: string) => {
        this.token = token;
      }
    );
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const reqWithHeaders = request.clone({
      headers: request.headers.set('Authorization', this.token),
    });

    return next.handle(reqWithHeaders);
  }

  ngOnDestroy() {
    this.tokenSubscription.unsubscribe();
  }
}
