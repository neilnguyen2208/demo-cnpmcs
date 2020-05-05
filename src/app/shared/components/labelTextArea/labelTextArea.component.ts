import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-labelTextArea',
    templateUrl: './labelTextArea.component.html',
    // styleUrls: ['./searchbar.component.css']
})

export class LabelTextAreaComponent {

    @Input()
    label = '';
    @Input()
    description = '';
    @Input()
    isReadOnly: Boolean = false;
}

