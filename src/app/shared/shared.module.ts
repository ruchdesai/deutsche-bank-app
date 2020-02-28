import { NgModule } from '@angular/core';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';

@NgModule({
    declarations: [
        SelectDropdownComponent,
        TableComponent
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
    exports: [
        CommonModule,
        SelectDropdownComponent,
        TableComponent
    ],
    bootstrap: []
})
export class SharedModule { }
