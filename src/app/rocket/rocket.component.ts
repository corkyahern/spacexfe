import { Component, OnInit } from '@angular/core';
import { Rocket } from '../rocket';
import { RocketService } from '../rocket.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {
  public rocket: Rocket
  constructor(
    private rocketService: RocketService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn()
    .subscribe({ 
      next: (res) => {
        if(res === "false"){
          this.router.navigate(["login"])
        }
      },
      error: (err) => {
        sessionStorage.clear()
        this.router.navigate(["login"])       
      }
    })
    this.rocket = new Rocket(0, "", 0, null)
  }
  handleSubmit(){
    this.rocketService.addRocket(this.rocket)
    .subscribe(response => {
      this.router.navigate(["rocket-list"])
    })
  }
}
