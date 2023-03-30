const passwordInput = document.getElementById('password-input');
const validationMessages = document.getElementById('validation-messages');

passwordInput.addEventListener('input', () => {
  validatePassword(passwordInput.value);
});

function validatePassword(password) {
  const hasUpperCase = /[А-ЯA-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasPunctuation = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasMinLength = password.length >= 8;

  let messages = '';

  if (hasUpperCase === !true) {
    messages += 'Нет большой буквы<br>';
  } 
  if (hasDigit === !true) {
    messages += 'Нет цифры<br>';
  } 
  if (hasPunctuation === !true) {
    messages += 'Нет знака пунктуации<br>';
  } 
  if (hasMinLength === !true) {
    messages += 'Введено меньше 8 символов<br>'
  } 

  validationMessages.innerHTML = messages;
}
