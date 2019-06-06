import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SelectComponent } from './select/select.component';
import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';

// MATERIALS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ModalComponent } from './modal/modal.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { GridComponent } from './grid/grid.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

// CUSTOM PIPES
import { SafeURLPipe } from './safe-url.pipe';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    ModalComponent,
    GridComponent,
    SafeURLPipe,
    FormComponent
  ],
  entryComponents:[FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
