import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit {
  user = new User(); 
  err: number = 0; 

  ngOnInit(): void {
  
  }
  constructor(private authService : AuthService,
    private router: Router) { }
    onLoggedin()
{
this.authService.login(this.user).subscribe({
next: (data) => {
let jwToken = data.headers.get('Authorization')!;
this.authService.saveToken(jwToken);
this.router.navigate(['/']);
},
error: (err: any) => {
this.err = 1;
}
});
}
    }
