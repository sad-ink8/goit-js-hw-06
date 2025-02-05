class StringBuilder {
  #value;

  // Ініціалізація властивостей екземпляра
  constructor(initialValue = '') {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  // Додавання значення в кінець
  padEnd(str) {
    this.#value += str;
  }

  // Додавання значення на початок
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Додавання значення з обох боків
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
