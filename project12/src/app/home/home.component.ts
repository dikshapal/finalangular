



import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 

  constructor(private router: Router) { }

  

  ngOnInit() {

    
  }

  fandv(): void {
    this.router.navigateByUrl("/fruitsandveggies");
}
packaged(): void {
  this.router.navigateByUrl("/packaged-food");
}
cereal(): void {
  this.router.navigateByUrl("/cereals");
}
mis(): void {
  this.router.navigateByUrl("/miscellaneous");
}
acc(): void {
  this.router.navigateByUrl("/account");
}
}