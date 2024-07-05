import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { AgGridAngular } from 'ag-grid-angular';
import { CustomRendererComponent } from './custom-renderer/custom-renderer.component';



@NgModule({
  declarations: [
    DatatableComponent,
    CustomRendererComponent
  ],
  imports: [
    CommonModule,
    AgGridAngular
  ],
  exports:[
    DatatableComponent,
    CustomRendererComponent
  ]
})
export class SharedModule { }
