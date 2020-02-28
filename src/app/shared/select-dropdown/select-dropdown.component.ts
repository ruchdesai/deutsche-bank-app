import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss']
})
export class SelectDropdownComponent {

  @Input() content: any;
  @Output() selectedOption: EventEmitter<any> = new EventEmitter();

  handleSelection(event) {
    this.selectedOption.emit(event);
  }

}
