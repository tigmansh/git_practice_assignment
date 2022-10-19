let str = "aba";
let bag = "";

for (let i = str.length; i >= 0; i--) {
  bag += str[i];
}

if (str == bag) {
  console.log(str + " is a pallindrome");
} else {
  console.log(str + " is not a pallindrome");
}