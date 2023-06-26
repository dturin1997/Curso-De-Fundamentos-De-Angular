import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Dario';
  age = 26;
  img =
    'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
  btnDisabled = true;
  person = {
    name: 'Dario',
    age: 26,
    avatar:
      'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
  };

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }
}
