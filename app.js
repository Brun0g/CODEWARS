// 8 kyu Beginner - Lost Without a Map
function maps(x) {
  let g = [];
  for (let i = 0; i < x.length; i++) {
    const f = Math.floor(x[i] * 2);
    g.push(f);
  }
  return g;
}
// 8 kyu Is he gonna survive?
function hero(bullets, dragons) {
  return bullets >= dragons * 2 ? true : false;
}
// 8 kyu Jenny's secret message
function greet(name) {
  if (name != "Johnny") return `Hello, ${name}!`;
  else if (name === "Johnny") return "Hello, my love!";
}
// 8 kyu Beginner Series #1 School Paperwork
function paperwork(n, m) {
  if (n >= 0 && m >= 0) {
    return n * m;
  } else {
    return 0;
  }
}
// 8 kyu Convert a Number to a String!
function numberToString(num) {
  return String(num);
}
// 8 kyu Even or Odd
function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
// 8 kyu Opposite number
function opposite(number) {
  return number * -1;
}
// 8 kyu Convert a Boolean to a String
function booleanToString(b) {
  if (b === true) {
    return `${b}`;
  } else if (b === false) {
    return `${b}`;
  }
}
// 8 kyu Replace all dots
var replaceDots = function (str) {
  return str.replace(/\./g, "-");
};
// 8 kyu Convert a String to a Number!
const stringToNumber = function (str) {
  return Math.floor(str);
};
