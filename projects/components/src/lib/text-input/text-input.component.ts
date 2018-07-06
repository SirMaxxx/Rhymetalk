import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'max-textinput',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})
export class TextInputComponent extends BaseComponent implements OnInit {
  /** The label shown in front of the text box */
  @Input() placeholder = '';
  @Input() talk = false;

  synUtterance = new SpeechSynthesisUtterance();

  constructor() {
    super();
  }

  //#region Angular implementations
  ngOnInit() {
    this.synUtterance.voice = speechSynthesis.getVoices().filter(voice => {
      return voice.name === 'Karen';
    })[0];

    this.synUtterance.lang = 'en-us';
    this.synUtterance.volume = 1;
    this.synUtterance.rate = 1;
    console.log('Can ii talk? ', this.talk);
  }
  //#endregion

  //#region DOM event handlers
  /** Called from DOM when value is changed */
  valueChanged(event: any) {
    this.value = event.target.value;
    this.onChange(event.target.value);
  }

  /** Called from DOM when control is touched */
  blurred() {
    console.log('focussed!');
    if (this.value && this.value !== '') {
      this.speak('You entered ' + this.value);
    }
  }
  focussed() {
    console.log('blurred!');

    this.onTouched();

    this.speak('Please enter ' + this.placeholder);
  }
  //#endregion

  speak(textToSpeech: string) {
    console.log('Saying ', textToSpeech);

    this.synUtterance.text = textToSpeech;

    // synUtterance.pitch = parseFloat(pitchRange.value);

    if (this.talk) {
      window.speechSynthesis.speak(this.synUtterance);
    }
  }
}
