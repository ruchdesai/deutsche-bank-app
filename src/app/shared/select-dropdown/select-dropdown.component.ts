import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss']
})
export class SelectDropdownComponent {

  /**
   * List of regions|countries
   *
   */
  @Input() content: any;
  /**
   * selected option emitter
   *
   */
  @Output() selectedOption: EventEmitter<any> = new EventEmitter();

  /**
   * Emits selected options
   *
   */
  handleSelection(value: string) {
    this.selectedOption.emit(value);
  }

}
