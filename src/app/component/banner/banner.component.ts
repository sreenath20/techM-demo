import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  title:string="TechM"
  name :string="India";
  
  constructor(){
    this.title = "My Banner";
  }
}
