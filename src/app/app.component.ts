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
  names: string[] = ['Dario', 'Julian', 'Santiago'];
  names2: any[] = ['Dario', 'Julian', 'Santiago', 12];
  newName = '';

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
