import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-wrapper',
  imports: [],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css',
})
export class WrapperComponent {
  openLink() {
    window.open(environment.gitHubAuthorUrl);
  }
}
