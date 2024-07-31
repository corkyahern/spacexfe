import { Component, OnInit } from '@angular/core';
import { Launch } from '../launch';
import { ActivatedRoute, Router } from '@angular/router';
import { LaunchService } from '../launch.service';
import { Rocket } from '../rocket';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-launchupdate',
  templateUrl: './launchupdate.component.html',
  styleUrls: ['./launchupdate.component.css']
})
export class LaunchupdateComponent implements OnInit {
  public launch: Launch
  public id: number
  constructor(
    private route: ActivatedRoute,
    private launchService: LaunchService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn()
    .subscribe({
      next: (response) => { if(response === "false"){
        this.router.navigate(["login"])
      }},
      error: (err) => {
        sessionStorage.clear()
        this.router.navigate(["login"])
      }
    })
    this.launch = new Launch(0, null, false, new Rocket(0, "", 0, null))
    this.id = this.route.snapshot.params["id"]
    this.launchService.getLaunchById(this.id).subscribe(
      response => {
        this.launch = response
      })
  }

  handleSubmit(){
    this.launchService.updateLaunch(this.launch, this.id)
    .subscribe(response => {
      this.router.navigate(["launch-list"])
    })
  }

}
