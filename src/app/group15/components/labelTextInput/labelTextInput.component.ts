import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-labelTextInput',
    templateUrl: './labelTextInput.component.html',
    styleUrls: ["../../styles.css"]
})

export class LabelTextInputComponent {


    @Input()
    label = '';
    @Input()
    content = '';
    @Input()
    isReadOnly: Boolean = false;


}

