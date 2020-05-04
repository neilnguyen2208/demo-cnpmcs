import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-labelTextInput',
    templateUrl: './labelTextInput.component.html',
    // styleUrls: ['./searchbar.component.css']
})

export class LabelTextInputComponent {


    @Input()
    label = '';
    @Input()
    content = '';



}

