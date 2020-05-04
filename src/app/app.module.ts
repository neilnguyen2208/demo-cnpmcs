import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SlidebarComponent } from '../app/shared/components/Slidebar/slidebar.component'
import { ToolbarComponent } from '../app/shared/components/Toolbar/toolbar.component'
import { SearchbarComponent } from '../app/shared/components/Searchbar/searchbar.component'
import { PathbarComponent } from '../app/shared/components/Pathbar/pathbar.component'
import { ButtonOKComponent } from '../app/shared/components/btnOK/btnOK.component'
import { ButtonDeclineComponent } from '../app/shared/components/btnDecline/btnDecline.component'
import { TableHeadbarComponent } from '../app/shared/components/tableHeader/tableHeadbar.component'
import { LabelTextInputComponent } from '../app/shared/components/labelTextInput/labelTextInput.component'
import { LabelTextAreaComponent } from '../app/shared/components/labelTextArea/labelTextArea.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    SlidebarComponent,
    ToolbarComponent,
    SearchbarComponent,
    PathbarComponent,
    ButtonOKComponent,
    ButtonDeclineComponent,
    TableHeadbarComponent,
    LabelTextInputComponent,
    LabelTextAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
