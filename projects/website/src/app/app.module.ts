import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from 'components';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RhymeComponent } from './rhyme/rhyme.component';

@NgModule({
  declarations: [AppComponent, RhymeComponent],
  imports: [
    BrowserModule,
    ComponentsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
