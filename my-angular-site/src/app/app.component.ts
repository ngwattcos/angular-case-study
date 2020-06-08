import { Component } from '@angular/core';
// import { YellowBackgroundComponent } from '../app/yellow-background/yellow-background.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = ['Learn Angular'];
  title = 'my-angular-site';
}
