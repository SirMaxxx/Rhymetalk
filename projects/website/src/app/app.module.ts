import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from 'components';
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
