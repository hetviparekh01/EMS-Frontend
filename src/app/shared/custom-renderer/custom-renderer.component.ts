import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';

@Component({
  selector: 'app-custom-renderer',
  templateUrl: './custom-renderer.component.html',
  styleUrls: ['./custom-renderer.component.scss']
})
export class CustomRendererComponent {
  params: any;
  constructor(private ls:LocalstorageService){}
  role:string=this.ls.getRole() as string


  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params = params;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true;
  }

  viewBtn() {
    this.params.viewBtn(this.params.data._id);
  }
  updateBtn() {
    this.params.updateBtn(this.params.data._id);
  }
  deleteBtn() {
    this.params.deleteBtn(this.params.data._id);
  }
}
