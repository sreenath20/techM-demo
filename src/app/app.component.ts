import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  title = 'my-app';

  isOn = false; // 

  clicked() { this.isOn = !this.isOn; }

  constructor(private router?:Router){}

  title = "TechM";

  changeTitle(newTitle: string) {
    this.title = newTitle;

  }
  gotoWallet(){
    //this.router.navigateByUrl('/wallet');
  }
  
}
