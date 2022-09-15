import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RocketComponent } from './rocket/rocket.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ResourcesComponent } from './resources/resources.component';
import { NextStepsComponent } from './next-steps/next-steps.component';

@NgModule({
  declarations: [
    AppComponent,
    RocketComponent,
    ToolbarComponent,
    ResourcesComponent,
    NextStepsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
