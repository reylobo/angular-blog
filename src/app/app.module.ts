// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// import { HttpClientModule } from '@angular/common/http';
// import { SelectComponent } from './select/select.component';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';
// import {MatGridListModule} from '@angular/material/grid-list';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import { PostService } from './post.service';


// @NgModule({
//   declarations: [
//     AppComponent,
//     SelectComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     BrowserAnimationsModule,
//     MatGridListModule,
//     MatButtonToggleModule
//   ],
//   providers: [PostService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



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
import { SafeURLPipe } from './safe-url.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    ModalComponent,
    GridComponent,
    SafeURLPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatGridListModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
