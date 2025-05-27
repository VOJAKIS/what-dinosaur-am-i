import { Component } from '@angular/core';
import { WrapperComponent } from '../common/components/wrapper/wrapper.component';
import { Router } from '@angular/router';
import { GoBackButtonComponent } from '../common/components/go-back-button/go-back-button.component';

@Component({
  selector: 'app-not-a-dinosaur',
  imports: [WrapperComponent, GoBackButtonComponent],
  templateUrl: './not-a-dinosaur.component.html',
  styleUrl: './not-a-dinosaur.component.css',
})
export class NotADinosaurComponent {
  title = 'You are not a Dinosaur!';
}
