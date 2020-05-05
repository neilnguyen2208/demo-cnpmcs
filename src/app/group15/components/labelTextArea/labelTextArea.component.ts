import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-labelTextArea',
    templateUrl: './labelTextArea.component.html',
    styleUrls: ["../../styles.css"]
})

export class LabelTextAreaComponent {

    @Input()
    label = '';
    @Input()
    description = '';
    @Input()
    isReadOnly: Boolean = false;
}

