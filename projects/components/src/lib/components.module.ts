import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
  imports: [
  ],
  declarations: [ComponentsComponent, TextInputComponent],
  exports: [ComponentsComponent]
})
export class ComponentsModule { }
