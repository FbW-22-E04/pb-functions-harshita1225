//ADD UP

function sumOfIntegers(value) {
  let result1 = 0;
  for (let i = 0; i <= value; i++) {
    //console.log(i);
    result1 += i;
  }
  return result1;
}
console.log(sumOfIntegers(4));
console.log(sumOfIntegers(13));
console.log(sumOfIntegers(600));

//Cubed

function sumOfCubes(x, y, z) {
  let result2 = 0;
  if (typeof x == "number") {
    result2 += x ** 3;
  }
  if (typeof y == "number") {
    result2 += y ** 3;
  }
  if (typeof z == "number") {
    result2 += z ** 3;
  }

  return result2;
}

console.log(sumOfCubes(1, 5, 9));
console.log(sumOfCubes(2));
console.log(sumOfCubes(0));
console.log(sumOfCubes(undefined, undefined, 8));
//string Check
let result3 = "";
function isStrStartOfWord(word, string) {
  result3 = string.includes(word);

  return result3;
}
console.log(isStrStartOfWord("bu", "button"));
console.log(isStrStartOfWord("tri", "triplet"));
console.log(isStrStartOfWord("beau", "pastry"));

//4. Less Than or Equal to Zero?

let result4 = 0;
function isLEQZero(numberValue) {
  if (numberValue <= 0) {
    console.log("True.Number value is less than 0");
  } else {
    console.log("False.Number is higher than 0");
  }
}

isLEQZero(3);
isLEQZero(0);
isLEQZero(-4);
isLEQZero(10);

//5. Count Occurrences

function countOccurrences(string, letter) {
  let result5 = string.split(letter).length - 1;
  return result5;
}
console.log(countOccurrences("this is a string", "i"));
console.log(countOccurrences("this is a string", "a"));
console.log(countOccurrences("this is a string", "t"));

//6.X To The Power of X

function calcBaseToExponent(num1, num2) {
  let result6 = num1 ** num2;
  return result6;
}
console.log(calcBaseToExponent(5, 5));
console.log(calcBaseToExponent(10, 10));
console.log(calcBaseToExponent(3, 3));
console.log(calcBaseToExponent(8, 3));

//7. Dog Years

function dogAge(age) {
  let resultDogAge = age * 7;
  return resultDogAge;
}
console.log(`your Doggo is ${dogAge(4)} years old in dog years`);
console.log(`your Doggo is ${dogAge(1)} years old in dog years`);
console.log(`your Doggo is ${dogAge(3.1)} years old in dog years`);

//8. A Lifetime Supply...

function calcLifetimeSupply(age, perDayUnit, maxage) {
  if (typeof maxage !== "number") {
    maxage = 100;
  }
  let result8 = Math.ceil((maxage - age) * (perDayUnit * 365.25));

  console.log(
    `The snack company should provide you with ${result8} units, until you are a ripe old age of ${maxage} . Happy snacking!"`
  );
}
calcLifetimeSupply(25, 2);
calcLifetimeSupply(40, 3);
calcLifetimeSupply(32, 0.58);

// 9.Where's Waldo?

function isWaldoHere(str) {
  let result9 = str.includes("Waldo");
  return result9;
}

console.log(isWaldoHere("is there a wal here?"));
console.log(isWaldoHere("I found you Waldo!"));
console.log(isWaldoHere("Wait, don't you mean Wally?"));
console.log(isWaldoHere("waldo is here"));

//10. Pie

function isEqualSlices(p, q, r) {
  let SlicePerPerson = p / q; //no of pieces / no of people

  if (SlicePerPerson >= r) {
    console.log("yes possible");
  } else {
    console.log("not possible");
  }
}
isEqualSlices(11, 5, 3);
isEqualSlices(8, 3, 2);
isEqualSlices(8, 3, 3);
isEqualSlices(24, 12, 2);

//11. XO

function isEqualNumXandO(stringValue) {
  let totalX = stringValue.split("x").length + stringValue.split("X").length;
  let totalO = stringValue.split("o").length + stringValue.split("O").length;

  if (totalO === totalX) {
    console.log("True. same number of X and O");
  } else {
    console.log("False. Not same number of X and O");
  }
}
isEqualNumXandO("ooxx");
isEqualNumXandO("xooxx");
isEqualNumXandO("ooxXm");
isEqualNumXandO("zpzpzpp");
isEqualNumXandO("zzoo");

//12.isPrime?
function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log("is it prime number?", isPrime(7));
console.log("is it prime number?", isPrime(23));
console.log("is it prime number?", isPrime(33));

//13. Validate email
let dot = ".";
let attherate = "@";

function validateEmail(email) {
  let positionDot = email.indexof(".");
  let positionatrate = email.indexof("@");
  if (!email.includes("@")) {
    return false;
  } else if (!email.includes(".")) {
    return false;
  } else if (positionDot - positionatrate <= 1) {
    return false;
  } else if (
    email[0] === "." ||
    email[0] === "@" ||
    email[email.lenght - 1] === "." ||
    email[email.length - 1] === "@"
  ) {
    return false;
  } else {
    return true;
  }
}
console.log(validateEmail("j@example.com"));
console.log(validateEmail("@example.com"));
//console.log(validateEmail("john.smith@com"));
//console.log(validateEmail("john.smith@email.com"));
//console.log(validateEmail("john..smith@email.com"));
//console.log(validateEmail("john.@email.com"));
//console.log(validateEmail("john@.email.com"));
