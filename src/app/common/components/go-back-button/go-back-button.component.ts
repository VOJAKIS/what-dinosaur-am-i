import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-go-back-button',
  imports: [],
  templateUrl: './go-back-button.component.html',
  styleUrl: './go-back-button.component.css',
})
export class GoBackButtonComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate([`/`]);
  }
}
