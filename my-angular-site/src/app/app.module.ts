import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YellowBackgroundComponent } from './yellow-background/yellow-background.component';

@NgModule({
  declarations: [
    AppComponent,
    YellowBackgroundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
