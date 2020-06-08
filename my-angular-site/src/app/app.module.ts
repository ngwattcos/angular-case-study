import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YellowBackgroundComponent } from './yellow-background/yellow-background.component';
import { MarginTopComponent } from './margin-top/margin-top.component';

@NgModule({
  declarations: [
    AppComponent,
    YellowBackgroundComponent,
    MarginTopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
