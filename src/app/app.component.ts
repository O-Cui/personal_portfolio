import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nameInput='';
  emailInput='';
  url="https://formspree.io/f/mgeqnokw";
  messageInput='';
  title="Hello";

  contactForm= new FormGroup({
    name: new FormControl(this.nameInput, [
      Validators.required
    ]),
    email: new FormControl(this.emailInput, [
      Validators.required,
      Validators.minLength(3)
    ]),
    message: new FormControl(this.messageInput, [
      Validators.required
    ])

  });

  onSubmit(){
    console.warn(this.contactForm.value);
  }

  get name() {
    return this.contactForm.get('name')
  }
  get email() {
    return this.contactForm.get('email')
  }
  get message() {
    return this.contactForm.get('message')
  }
}
