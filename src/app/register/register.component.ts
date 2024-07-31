import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public register: Register
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.register = new Register("", "")
  }
  handleSubmit(){
    this.authService.register(this.register)
    .subscribe({
          next: (response) => {
            this.router.navigate(["login"])
            alert(response)
          },
          error: (err) => { 
            alert(err.error)
          }
      })
    }
} 
