import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './group15-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from '../app.component';
import { SlidebarComponent } from './components/Slidebar/slidebar.component'
import { ToolbarComponent } from './components/Toolbar/toolbar.component'
import { SearchbarComponent } from './components/Searchbar/searchbar.component'
import { PathbarComponent } from './components/Pathbar/pathbar.component'
import { ButtonOKComponent } from './components/btnOK/btnOK.component'
import { ButtonDeclineComponent } from './components/btnDecline/btnDecline.component'
import { TableHeadbarComponent } from './components/tableHeader/tableHeadbar.component'
import { LabelTextInputComponent } from './components/labelTextInput/labelTextInput.component'
import { LabelTextAreaComponent } from './components/labelTextArea/labelTextArea.component'
import { ModalService } from './modal/modal.service'
import { ModalComponent } from './modal/modal.component'

// import

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SlidebarComponent,
    ToolbarComponent,
    SearchbarComponent,
    PathbarComponent,
    ButtonOKComponent,
    ButtonDeclineComponent,
    TableHeadbarComponent,
    LabelTextInputComponent,
    LabelTextAreaComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    FormsModule
    // DialogModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
