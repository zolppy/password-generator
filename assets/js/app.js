const generateButton = document.querySelector('#generate-button');
const copyButton = document.querySelector('#copy-button');

/* Se essas variáveis não forem globais, acarretará duplicação desnecessária de código */
let index;
const lowercaseAlphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z'
];
const uppercaseAlphabet = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G',
  'H', 'I', 'J', 'K', 'L', 'M', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U',
  'V', 'W', 'X', 'Y', 'Z'
];
const letters = [...lowercaseAlphabet, ...uppercaseAlphabet];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
/* Caractere especial é tudo aquilo que não é letra ou número */
/* Há inúmeros exemplos, coloquei aqui os que acho mais interessantes */
const specialCaracters = [
  '!', '@', '#', '$', '%', '&', '*',
  '+', '-', '_', '{', '}', '[', ']',
  '.', '?', '|', '\\', '/', '^', '~',
  '(', ')', ':', ';', '='
];

const generateLetters = (passwordLength) => {
  let letter;
  /* Necessário que seja vazia, pois, caso contrário, acarretará problemas nas concatenações */
  let password = '';
  /* É melhor armazenar numa variável, pois o programa calcularia o comprimento a cada iteração do loop */
  let lettersLength = letters.length;

  for (let i = 0; i < passwordLength; i++) {
    index = Math.floor(Math.random() * lettersLength); /* Se length for x, os valores vão de 0 até (x - 1) */
    letter = letters[index];
    password += letter;
  }

  return password;
}

const generateNumbers = (passwordLength) => {
  let number;
  let password = '';
  let numbersLength = numbers.length;

  for (let i = 0; i < passwordLength; i++) {
    index = Math.floor(Math.random() * numbersLength);
    number = numbers[index];
    password += number;
  }

  return password;
}

const generateSpecialCaracters = (passwordLength) => {
  let specialCaracter;
  let password = '';
  let specialCaractersLength = specialCaracters.length;

  for (let i = 0; i < passwordLength; i++) {
    index = Math.floor(Math.random() * specialCaractersLength);
    specialCaracter = specialCaracters[index];
    password += specialCaracter;
  }

  return password;
}

const generateLettersAndNumbers = (passwordLength) => {
  let caracter;
  let password = '';
  const caracters = [...lowercaseAlphabet, ...uppercaseAlphabet, ...numbers];
  let caractersLength = caracters.length;

  for (let i = 0; i < passwordLength; i++) {
    index = Math.floor(Math.random() * caractersLength);
    caracter = caracters[index];
    password += caracter;
  }

  return password;
}

const generateLettersAndSpecialCaracters = (passwordLength) => {
  let caracter;
  let password = '';
  const caracters = [...lowercaseAlphabet, ...uppercaseAlphabet, ...specialCaracters];
  let caractersLength = caracters.length;

  for (let i = 0; i < passwordLength; i++) {
    index = Math.floor(Math.random() * caractersLength);
    caracter = caracters[index];
    password += caracter;
  }

  return password;
}

const generateNumbersAndSpecialCaracters = (passwordLength) => {
  let caracter;
  let password = '';
  const caracters = [...numbers, ...specialCaracters];
  let caractersLength = caracters.length;
  for (let i = 0; i < passwordLength; i++) {
    index = Math.floor(Math.random() * caractersLength);
    caracter = caracters[index];
    password += caracter;
  }

  return password;
}

const generateAll = (passwordLength) => {
  let caracter;
  let password = '';
  const caracters = [...lowercaseAlphabet, ...uppercaseAlphabet, ...specialCaracters, ...numbers];
  let caractersLength = caracters.length;

  for (let i = 0; i < passwordLength; i++) {
    index = Math.floor(Math.random() * caractersLength);
    caracter = caracters[index];
    password += caracter;
  }

  return password;
}

const getPasswordType = () => {
  const selectElement = document.querySelector('#password-type-select');
  let passwordType = selectElement.value;

  /* O JavaScript interpreta qualquer coisa diferente de null, NaN, undefined, '', 0 e 0.0 como false*/
  if (!passwordType) {
    alert('Escolha uma opção de senha.');
    return;
  }

  return passwordType;
}

const getPasswordLength = () => {
  const passwordLengthInput = document.querySelector('#password-length-input');
  const MIN = passwordLengthInput.getAttribute('min');
  const MAX = passwordLengthInput.getAttribute('max');
  let passwordLength = passwordLengthInput.value;

  if (passwordLength < MIN || passwordLength > MAX) {
    alert(`O total de caracteres deve estar entre ${MIN} e ${MAX}.`);
    return;
  }

  return passwordLength;
}

const generatePassword = () => {
  let password;
  let passwordType = getPasswordType();
  let passwordLength = getPasswordLength();

  if (!passwordType || !passwordLength) {
    return;
  }

  if (passwordType === 'letters') {
    password = generateLetters(passwordLength);
  } else if (passwordType === 'numbers') {
    password = generateNumbers(passwordLength);
  } else if (passwordType === 'special-caracters') {
    password = generateSpecialCaracters(passwordLength);
  } else if (passwordType === 'letters-and-numbers') {
    password = generateLettersAndNumbers(passwordLength);
  } else if (passwordType === 'letters-and-special-caracters') {
    password = generateLettersAndSpecialCaracters(passwordLength);
  } else if (passwordType === 'numbers-and-special-caracters') {
    password = generateNumbersAndSpecialCaracters(passwordLength);
  } else {
    password = generateAll(passwordLength);
  }

  return password;
}

const showPassword = () => {
  let password = generatePassword();
  const generatedPasswordContainer = document.querySelector('#generated-password-container');
  const generatedPasswordInput = document.querySelector('#generated-password-input');

  if (password) {
    generatedPasswordInput.value = password;
    generatedPasswordContainer.classList.remove('hide');
  } else {
    return;
  }
}

const copyPassword = () => {
  const generatedPasswordInput = document.querySelector('#generated-password-input');
  let text = generatedPasswordInput.value;
  
  /* Necessário para que a cópia funcione */
  generatedPasswordInput.focus(); /* Só é possível utilizar "focus" em inputs */
  
  navigator.clipboard.writeText(text)
  .then(() => {
    alert('Copiado para área de transferência!');
  })
  /* Não há tratamento de erros */
  .catch((error) => {
    console.error('Falha ao copiar:', error);
    alert('Falha ao copiar para a área de transferência.');
  });
}

generateButton.addEventListener('click', showPassword);
copyButton.addEventListener('click', copyPassword);