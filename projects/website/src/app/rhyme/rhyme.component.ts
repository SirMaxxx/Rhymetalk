import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Component({
  selector: 'web-rhyme',
  templateUrl: './rhyme.component.html',
  styleUrls: ['./rhyme.component.css']
})
export class RhymeComponent implements OnInit {
  rhymingWord = '';
  name: string; // A person's name
  address: string;
  phone: string;
  // Thge rymes that have been discovered for the word

  shouldTalk = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {}
  rhymeForm: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.rhymeForm = this.fb.group({
      name: [this.name, Validators.required],
      address: [this.address, Validators.required],
      phone: [this.phone, Validators.required]
    });
  }

  click() {}
}
