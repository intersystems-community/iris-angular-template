import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DefaultService, PlatformUserOutput } from 'src/app/generated';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private static USER_KEY = "userData";
  private static AUTH_KEY = "authData";
  private userSubject: BehaviorSubject<PlatformUserOutput | null>;
  public user: Observable<PlatformUserOutput | null>;

  constructor(
    private router: Router,
    private defaultService: DefaultService
  ) {
    const userJSON = sessionStorage.getItem(AuthenticationService.USER_KEY);
    const user = userJSON === null ? null : JSON.parse(userJSON);
    this.userSubject = new BehaviorSubject<PlatformUserOutput | null>(user);
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): PlatformUserOutput | null {
    return this.userSubject.value;
  }

  getAuthorization(): string | undefined {
    return sessionStorage.getItem(AuthenticationService.AUTH_KEY) ?? undefined;
  }

  login(username: string, password: string) {
    const authdata = window.btoa(username + ':' + password);
    this.defaultService.defaultHeaders = this.defaultService.defaultHeaders.set('Authorization', `Basic ${authdata}`);
    return this.defaultService.authStatusGet('body').pipe(map(user => {
      sessionStorage.setItem(AuthenticationService.USER_KEY, JSON.stringify(user));
      sessionStorage.setItem(AuthenticationService.AUTH_KEY, authdata);
      this.userSubject.next(user);
      return user;
    }));
  }

  logout() {
    this.defaultService.authLogoutPost().subscribe(() => {
      this.defaultService.defaultHeaders = this.defaultService.defaultHeaders.delete('Authorization');
      sessionStorage.removeItem(AuthenticationService.USER_KEY);
      sessionStorage.removeItem(AuthenticationService.AUTH_KEY);
      this.userSubject.next(null);
      this.router.navigate(['/login']);
    })
  }
}
