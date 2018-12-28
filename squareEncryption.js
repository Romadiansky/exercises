const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let text = "thiswillbewhereyourinputgoes";
let iterationSize = Math.floor(Math.sqrt(text.length));
let result = [];

function sqrdCode (start) {
  if (start === iterationSize) return;
  let chunk = "";
  for (let i = start; i < text.length; i += iterationSize) {
    chunk += text[i];
  }
  result.push(chunk + " ");
  sqrdCode(start + 1);
  return result;
}

readline.question("tell me your secret code (but don't use spaces!): ", (input) => {
  text = input;
  console.log(sqrdCode(0).join(""));
  readline.close();
});
