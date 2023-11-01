import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/Shared/Models/User';
import { UserService } from 'app/Shared/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User=new User();
  errorAuth:String;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.user.client_id="AuthService"
    this.user.client_secret="ev94TP6DRaDZSVhxdXK6WIPMwyme84j1"
    this.user.grant_type="password"
  }

  logIn() {
    console.log(this.user);
    this.userService.LogIn(this.user).subscribe(
      (response: any) => {
        if (response && response.access_token) {
          console.log(response.access_token);
          localStorage.setItem('access_token', response.access_token);
          window.location.href="http://localhost:4200/#/dashboard"
        } else {
          console.log('Échec de la connexion.');
        }
      },
      (error) => {
        console.log(error.error.error_description);
       this.errorAuth=error.error.error_description;

      }
    );
  }
 
}
