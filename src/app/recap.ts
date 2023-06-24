const username: string = 'dturin1997';
const sum = (a: number, b: number) => {
  return a + b;
};

sum(10, 30);

class Person {
  private age: number;
  lastname: string;

  constructor(age: number, lastname: string) {
    this.age = age;
    this.lastname = lastname;
  }
}

class Product {
  constructor(public stock: number, public name: string) {}
}

const dario = new Person(26, 'Turin');

const product1 = new Product(15, 'Laptop');

product1.name;

/*
Si se coloca private el atributo
solo tiene alcance dentro de la clase
*/
//dario.age;
