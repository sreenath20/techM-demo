import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() message?: string;
  @Output() changeEvent: EventEmitter<string> = new EventEmitter();

  handleClick(title: string) {

    if (title) {
      console.log('emitting title to parent :'+title);
      this.changeEvent.emit(title);
      console.log('after emit');
    }

  }

}
