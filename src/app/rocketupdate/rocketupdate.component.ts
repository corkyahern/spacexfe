import { Component, OnInit } from '@angular/core';
import { Rocket } from '../rocket';
import { ActivatedRoute, Router } from '@angular/router';
import { RocketService } from '../rocket.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-rocketupdate',
  templateUrl: './rocketupdate.component.html',
  styleUrls: ['./rocketupdate.component.css']
})
export class RocketupdateComponent implements OnInit {
  public rocket: Rocket
  public id: number
  constructor(
    private route: ActivatedRoute,
    private rocketService: RocketService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn()
    .subscribe({
      next: (response) => {if(response === "false"){
        this.router.navigate(["login"])
      }},
      error: err => {
        sessionStorage.clear()
        this.router.navigate(["login"])
      }
    })
    this.rocket = new Rocket(0, "", 0, null)
    this.id = this.route.snapshot.params["id"]
    this.rocketService.getRocketById(this.id)
    .subscribe(response => {
      this.rocket = response
    })
  }
  handleUpdate(){
    this.rocketService.updateRocket(this.rocket, this.id)
    .subscribe(response => {
      this.router.navigate(["rocket-list"])
    })
  }
}
