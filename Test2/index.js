function explainTask1() {
    alert(
      'Напишите функцию, которая принимает три числовых параметра и возвращает произведение двух максимальных из них.'
    );
  }

function inputNumber1() {
    return parseFloat(prompt('Введите любое число.'));
  }

function isValidInput1(a, b, c) {
    return !(Number.isNaN(a) && Number.isNaN(b) && Number.isNaN(c));
  }

explainTask1();

const a = inputNumber1();
const b = inputNumber1();
const c = inputNumber1();

if (!isValidInput1(a, b, c)) {
    return;
  }

function maxProduct(a, b, c) {
    if (a>b && a>c) {
      d = a;
    }
    else {
      if (b>a && b>c) {
        d = a;
      }
      else {
        d = c;
      }
    }


    if (d=a) {
      if (b>c) {
          d=d*b;
      }
      else {
          d=d*c;
      }
    }
    else if (d=b){
      if (a>c) {
          d=d*a;
      }
      else {
          d=d*c;
      }
    }
    else if (d=c){
      if (a>b) {
          d=d*a;
      }
      else {
          d=d*b;
      }
    }
    return d;
  }  

alert('Произведение двух максимальных чисел из трёх введённых: ' + maxProduct(a,b,c));



function explainTask2() {
    alert(
      'Объявите функцию, которая принимает на вход два параметра: имя и звание. Значение звания по умолчанию «рядовой». Продемонстрируйте вариант использования функции с передачей 1 и 2 параметров.'
    );
  }

function inputName() {
    return prompt('Введите имя.');
  }

function inputRank() {
    return prompt('Введите звание.');
  }

explainTask2();

nm = inputName();
rank = inputRank();

function printSolderInfo(name,rank) {
  alert('Имя: ' + name);
  if (rank == "") {
    rank = "Рядовой"
  }
  alert('Звание: ' + rank);
}

printSolderInfo(nm,rank);



function explainTask3() {
  alert(
    'Объявите функцию, которая принимает на вход функциональное выражение и набор параметров для его вызова, а возвращает результат вызова переданного функционального выражения.'
  );
}

explainTask3();

function executeFunction() {
  const funcExpression = prompt("Введите функциональное выражение (например, 'x => x * x'):");
  const params = prompt("Введите параметры через запятую:", "").split(",").map(Number);
  const func = eval(`(${funcExpression})`);
 return func(...params);
}

alert('Результат работы функции: ' + executeFunction());



function explainTask4() {
  alert(
    'Объявите функцию, которая принимает на вход целые числа. Для чётных значений функция возвращает стрелочное выражение возведения числа в квадрат, а для нечётных – стрелочное выражение возведения в куб.'
  );
}

function inputNumber4() {
  return parseInt(prompt('Введите любое целое число: '));
}

function isValidInput4(m) {
  return !(Number.isNaN(m));
}

explainTask4();

const m = inputNumber4();

if (!isValidInput4(m)) {
  return;
}

function intUnaryOperator(m) {
  if (m % 2 == 0) {
    return x => x * x;
  }
  else {
    return x => x * x * x;  
  }
}

alert('Результат работы функции: ' + intUnaryOperator(m));



function explainTask5() {
  alert(
    'Напишите рекурсивную функцию для расчёта факториала числа n.'
  );
}

function inputNumber5() {
  return parseInt(prompt('Введите любое целое число.'));
}

function isValidInput5(n) {
  return !(Number.isNaN(n));
}

explainTask5();

const n = inputNumber5();

if (!isValidInput5(n)) {
    return;
  }

function factorial(n) {
  if (n==0) {
    return 1;
  }
  else {
    return (n*factorial(n-1))
  }
}

alert('Факториал введённого числа: ' + factorial(n));