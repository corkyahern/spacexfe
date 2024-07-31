import { Component, OnInit } from '@angular/core';
import { Launch } from '../launch';
import { LaunchService } from '../launch.service';
import { Router } from '@angular/router';
import { Rocket } from '../rocket';
import { RocketService } from '../rocket.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-launchlist',
  templateUrl: './launchlist.component.html',
  styleUrls: ['./launchlist.component.css']
})
export class LaunchlistComponent implements OnInit {
  public rockets: Rocket[]
  constructor(
    private router : Router,
    private rocketService: RocketService,
    private launchService: LaunchService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn()
    .subscribe({
      next: (response) => { if(response === "false"){
        this.router.navigate(["login"])
      }
    },
    error: (err) => {
      this.router.navigate(["login"])
    }
    })
    this.rocketService.getAllRockets()
    .subscribe(response => {
      this.rockets = response
    })
  }
  updateLaunch(id: number){
    this.router.navigate(["launch-update", id])
  }
  handleDelete(id: number){
      this.launchService.deleteLaunch(id)
      .subscribe(response => {
        location.reload()
      })
  }
}
