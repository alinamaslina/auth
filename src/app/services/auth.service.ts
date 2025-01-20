import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenKey = 'token';

  private setToken(tokenValue: string) {
    localStorage.setItem(this.tokenKey, tokenValue);
  }
  private getToken() {
    return localStorage.getItem(this.tokenKey);
  }
  private removeToken() {
    localStorage.removeItem(this.tokenKey);
  }
  isAuthentificated(): boolean {
    return this.getToken() !== null;
  }
  register(username: string, password: string) {
    console.log('Registered', username);
  }
  login(username: string, password: string) {
    this.setToken('fake_token');
  }
  logout() {
    this.removeToken();
  }
}
