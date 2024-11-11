function removeChars(str, charsToRemove) {
  let result = str;
  
  let regex = new RegExp(`[${charsToRemove.join('')}]`, 'g');
  
  result = result.replace(regex, '');
  
  return result;
}

let inputStr = prompt("Введіть рядок:");

let chars = prompt("Введіть символи, які потрібно видалити (без пробілів):");

let charsToRemove = chars.split('');

let result = removeChars(inputStr, charsToRemove);
console.log(result);
alert("Результат: " + result);

