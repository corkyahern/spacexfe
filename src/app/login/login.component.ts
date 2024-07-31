import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login: Login
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.login = new Login("", "")
  }
  
  handleSubmit(){
    this.authService.login(this.login)
    .subscribe({
        next: (response) => {
          console.log(response);
          const token = "Basic " + btoa(`${this.login.username}:${this.login.password}`)
          sessionStorage.setItem("token", token)
          this.router.navigate(["rocket-list"])
        },
        error: (err) => {
          alert(err.error)
        }
       })
  }


}
