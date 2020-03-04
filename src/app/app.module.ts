import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { SettingsModalComponent } from './settings-modal/settings-modal.component';
import { StatsModalComponent } from './stats-modal/stats-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsModalComponent,
    StatsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [StatsModalComponent, SettingsModalComponent]
})
export class AppModule { }
