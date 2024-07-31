import { Component, OnInit } from '@angular/core';
import { Rocket } from '../rocket';
import { RocketService } from '../rocket.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-rocketlist',
  templateUrl: './rocketlist.component.html',
  styleUrls: ['./rocketlist.component.css']
})
export class RocketlistComponent implements OnInit {
  rockets: Rocket[]
  constructor(
    private rocketService: RocketService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn()
    .subscribe({
      next: (response) => {
      if(response === "false"){
        this.router.navigate(["login"])
      }
    },
    error: (err) => {
      sessionStorage.clear()
      this.router.navigate(["login"])
    }
    })
    this.rocketService.getAllRockets()
    .subscribe(response => {
      this.rockets = response
    })
  }
  handleUpdate(id: number){
    this.router.navigate(["rocket-update", id])
  }
  handleDelete(id: number) {
    this.rocketService.deleteRocket(id)
    .subscribe(response => {
      location.reload()
    })
  }
}
