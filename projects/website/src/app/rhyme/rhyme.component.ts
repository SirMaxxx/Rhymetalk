import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  shouldTalk = true;

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
