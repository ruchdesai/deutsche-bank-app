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
   * @type {*}
   * @memberof SelectDropdownComponent
   */
  @Input() content: any;
  /**
   * selected option emitter
   *
   * @type {EventEmitter<any>}
   * @memberof SelectDropdownComponent
   */
  @Output() selectedOption: EventEmitter<any> = new EventEmitter();

  /**
   * Emits selected options
   *
   * @param {string} value region|country
   * @memberof SelectDropdownComponent
   */
  handleSelection(value: string) {
    this.selectedOption.emit(value);
  }

}
