import { Component, Input } from '@angular/core';
import { ModalService } from '../../shared/modal/modal.service'
@Component({
  selector: 'app-dvt-edit-detail',
  templateUrl: './DVT_Edit_Detail.component.html',
  styleUrls: ['./style_edit_detail.less']
})

export class DVT_Edit_DetailComponent {
  Ma_DVT = "DVT_01";
  Ten_DVT = "Cai";
  Description_DVT = "A text area can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier).The size of a text area can be specified by the cols and rows attributes, or even better; through CSS height and width properties.";

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {

  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
