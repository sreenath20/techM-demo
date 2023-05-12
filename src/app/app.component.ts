import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  title = 'my-app';

  isOn = false; // 

  clicked() { this.isOn = !this.isOn; }

  title = "TechM";

  changeTitle(newTitle: string) {
    this.title = newTitle;

  }

  
}
