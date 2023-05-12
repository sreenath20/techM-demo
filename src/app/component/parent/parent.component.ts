import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  title = "TechM";

  changeTitle(newTitle: string) {
    this.title = newTitle;

  }

}
