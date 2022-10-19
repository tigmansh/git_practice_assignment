let str = "aba";
let bag = "";

for (let i = str.length-1; i >= 0; i--) {
  bag += str[i];
}

if (str == bag) {
  console.log(str + " is a palindrome");
} else {
  console.log(str + " is not a palindrome");
}
