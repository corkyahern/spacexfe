import { Component, OnInit } from '@angular/core';
import { Launch } from '../launch';
import { LaunchService } from '../launch.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {
  public launch: Launch
  public rocketName: string
  constructor(
    private authService: AuthService,
    private router: Router,
    private launchService: LaunchService
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
    this.launch = new Launch(0, null, null, null)
  }

  handleSubmit(){
    this.launchService.addLaunch(this.launch, this.rocketName)
    .subscribe({next : (res) => {
      this.router.navigate(["launch-list"])
    },
    error: (err) => {
      alert(JSON.stringify(err.error))
    }
  })
  }

}
