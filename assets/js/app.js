/* O código está de certa forma limpo e obedece algumas boas práticas de codificação, porém percebe-se duplicação de código */
const generateButton = document.querySelector('#generate-button');
const copyButton = document.querySelector('#copy-button');

const letters = (passwordLength) => {
  let index;
  let caracter;
  /* Necessário que seja vazia, pois, caso contrário, acarreta problemas na concatenção */
  let password = '';
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
  const caracters = [...lowercaseAlphabet, ...uppercaseAlphabet];
  /* É melhor armazenar numa variável, pois o programa calcularia o comprimento a cada iteração do loop */
  let caractersLength = caracters.length;

  for (let i = 0; i < passwordLength; i++) {
    index = Math.random() * caractersLength; /* Se length for x, os valores vão de 0 até (x - 1) */
    caracter = caracters[index];
    password += caracter;
  }

  return password;
}

const numbers = (passwordLength) => {
  let index;
  let caracter;
  let password = '';
  const caracters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let caractersLength = caracters.length;

  for (let i = 0; i < passwordLength; i++) {
    index = Math.random() * caractersLength;
    caracter = caracters[index];
    password += caracter;
  }

  return password;
}

const specialCaracters = (passwordLength) => {
  let index;
  let caracter;
  let password = '';
  /* Caractere especial é tudo aquilo que não é letra ou número */
  /* Há inúmeros exemplos, coloquei aqui os que acho mais interessantes */
  const caracters = [
    '!', '@', '#', '$', '%', '&', '*',
    '+', '-', '_', '{', '}', '[', ']',
    '.', '?', '|', '\\', '/', '^', '~',
    '(', ')', ':', ';', '='
  ];
  let caractersLength = caracters.length;

  for (let i = 0; i < passwordLength; i++) {
    index = Math.random() * caractersLength;
    caracter = caracters[index];
    password += caracter;
  }

  return password;
}

const lettersAndNumbers = (passwordLength) => {
  let index;
  let caracter;
  let password = '';
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
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const caracters = [...lowercaseAlphabet, ...uppercaseAlphabet, ...numbers];
  let caractersLength = caracters.length;

  for (let i = 0; i < passwordLength; i++) {
    index = Math.random() * caractersLength;
    caracter = caracters[index];
    password += caracter;
  }

  return password;
}

const lettersAndSpecialCaracters = (passwordLength) => {
  let index;
  let caracter;
  let password = '';
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
  const specialCaracters = [
    '!', '@', '#', '$', '%', '&', '*',
    '+', '-', '_', '{', '}', '[', ']',
    '.', '?', '|', '\\', '/', '^', '~',
    '(', ')', ':', ';', '='
  ];
  const caracters = [...lowercaseAlphabet, ...uppercaseAlphabet, ...specialCaracters];
  let caractersLength = caracters.length;

  for (let i = 0; i < passwordLength; i++) {
    index = Math.random() * caractersLength;
    caracter = caracters[index];
    password += caracter;
  }

  return password;
}

const numbersAndSpecialCaracters = (passwordLength) => {
  let index;
  let caracter;
  let password = '';
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const specialCaracters = [
    '!', '@', '#', '$', '%', '&', '*',
    '+', '-', '_', '{', '}', '[', ']',
    '.', '?', '|', '\\', '/', '^', '~',
    '(', ')', ':', ';', '='
  ];
  const caracters = [...numbers, ...specialCaracters];
  let caractersLength = caracters.length;
  for (let i = 0; i < passwordLength; i++) {
    index = Math.random() * caractersLength;
    caracter = caracters[index];
    password += caracter;
  }

  return password;
}

const all = (passwordLength) => {
  let index;
  let caracter;
  let password = '';
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
  const specialCaracters = [
    '!', '@', '#', '$', '%', '&', '*',
    '+', '-', '_', '{', '}', '[', ']',
    '.', '?', '|', '\\', '/', '^', '~',
    '(', ')', ':', ';', '='
  ];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const caracters = [...lowercaseAlphabet, ...uppercaseAlphabet, ...specialCaracters, ...numbers];
  let caractersLength = caracters.length;

  for (let i = 0; i < passwordLength; i++) {
    index = Math.random() * caractersLength;
    caracter = caracters[index];
    password += caracter;
  }

  return password;
}

const getPasswordType = () => {
  const selectElement = document.querySelector('#password-type-select');
  const passwordType = selectElement.value;

  return passwordType;
}

const generatePassword = () => {
  let password;
  let passwordType = getPasswordType();
  const passwordLengthInput = document.querySelector('#password-length-input');
  let passwordLength = passwordLengthInput.value;

  if (passwordType === 'letters') {
    password = letters(passwordLength);
  } else if (passwordType === 'numbers') {
    password = numbers(passwordLength);
  } else if (passwordType === 'special-caracters') {
    password = specialCaracters(passwordLength);
  } else if (passwordType === 'letters-and-numbers') {
    password = lettersAndNumbers(passwordLength);
  } else if (passwordType === 'letters-and-special-caracters') {
    password = lettersAndSpecialCaracters(passwordLength);
  } else if (passwordType === 'numbers-and-special-caracters') {
    password = numbersAndSpecialCaracters(passwordLength);
  } else { /* all */
    password = all(passwordLength);
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
    alert('Escolha uma opção de senha.');
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