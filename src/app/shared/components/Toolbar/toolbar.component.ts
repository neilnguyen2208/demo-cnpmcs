import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../modal/modal.service'

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ["./style_toolbar.less"]
})

export class ToolbarComponent implements OnInit {

    private bodyText: string;

    constructor(private modalService: ModalService) {
    }

    ngOnInit() {
        this.bodyText = 'This text can be updated in modal 1';
    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }

}

