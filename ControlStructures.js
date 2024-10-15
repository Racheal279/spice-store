let num1 = 2;
let num2 = 3;
let num3 = 4;
if (num2 > num1) {
  console.log("The variable num2 is greater than variable num1");
}

if (num1 % 2 == 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

if (num3 < num2) {
  if (num2 < num1) {
    console.log(num3, num2, num1);
  } else if (num1 < num3) {
    console.log(num2, num3, num1);
  } else {
    console.log(num3, num1, num2);
  }
} else if (num3 < num1) {
  if (num2 < num1) {
    console.log(num1, num3, num2);
  } else {
    console.log(num1, num2, num3);
  }
} else {
  console.log(num3, num2, num1);
}
let num = 10;

if (num > 12) {
  console.log("The variable is greater than 12");
} else if (num > 10) {
  console.log("The variable is greater than 10");
} else if (num < 5) {
  console.log("The variable is less than 5");
} else {
  console.log("The variable is between 5 and 10");
}

// while loop for numbers 0-20//
let i = -1;
while (i < 20) {
  i++;
  console.log(i);
}

// for loop for numbers 0-20//
for (z = 0; z < 21; z++) {
  console.log(z);
}

// for loop for even numbers between  1 and 20 //
for (let k = 2; k <= 20; k += 2) {
  console.log(k);
}

for (let row = "*"; row <= "*"; row += "*") {
  for (let column = "*"; column <= "*****"; column += "*") {
    console.log(column);
  }
  console.log();
}
// nested loop//

let num4 = 325; //First number
let num5 = 65; //Second number
function gcd(num4, num5) {
  if (num5 === 0) {
    return num4;
  }
  return gcd(num5, num4 % num5);
}

let a = 25;
let b = 5;

function gcd(a, b) {
  if (a == 0) return b;
  return gcd(b % a, a);
}

gcd(a, b);
