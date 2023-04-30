class FormElement {
    constructor(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
    showName() {
        console.log(`Name: ${this.name}`);
    }
    getValue() {
        return this.value;
    }
}

class TextElement extends FormElement {
    constructor(name, placeholder) {
      super(name, 'text', '');
      this.placeholder = placeholder;
    }
    createInput() {
      const input = document.createElement('input');
      input.type = this.type;
      input.name = this.name;
      input.placeholder = this.placeholder;
      return input;
    }
  }
  
  class CheckboxElement extends FormElement {
    constructor(name, checked) {
      super(name, 'checkbox', '');
      this.checked = checked;
    }
    createInput() {
      const input = document.createElement('input');
      input.type = this.type;
      input.name = this.name;
      input.checked = this.checked;
      return input;
    }
  }
  
  class ButtonElement extends FormElement {
    constructor(name) {
      super(name, 'button', '');
    }
    createButton() {
      const button = document.createElement('button');
      button.type = this.type;
      button.name = this.name;
      button.textContent = this.name;
      return button;
    }
  }

const form = document.createElement('form');

const nameInput = new TextElement('name', 'Enter your name');
const emailInput = new TextElement('email', 'Enter your email');
const passwordInput = new TextElement('password', 'Enter your password');
passwordInput.type = 'password';

const newsletterCheckbox = new CheckboxElement('newsletter', true);
const agreementCheckbox = new CheckboxElement('agreement', false);

const submitButton = new ButtonElement('Submit');

form.appendChild(nameInput.createInput());
form.appendChild(emailInput.createInput());
form.appendChild(passwordInput.createInput());
form.appendChild(newsletterCheckbox.createInput());
form.appendChild(agreementCheckbox.createInput());
form.appendChild(submitButton.createButton());

document.body.appendChild(form);