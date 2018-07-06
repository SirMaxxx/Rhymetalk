import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsComponent } from './components.component';
import { MaxMaterialModele } from './material.module';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
  imports: [, BrowserAnimationsModule, MaxMaterialModele],
  declarations: [ComponentsComponent, TextInputComponent],
  exports: [ComponentsComponent, TextInputComponent]
})
export class ComponentsModule {}
