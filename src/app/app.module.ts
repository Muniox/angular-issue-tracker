import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ClarityModule} from "@clr/angular";
// import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import { IssueListComponent } from './issue-list/issue-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    // BrowserAnimationsModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
