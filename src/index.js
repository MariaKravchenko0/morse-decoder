const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = [];
  let result = "";

  for (let i = 0; i < expr.length; i += 10) {
    arr.push(expr.slice(i, i + 10));
  }

  for (let item of arr) {
    let key = "";

    for (let j = 0; j <= 10; j += 2) {
      if (item[j] + item[j + 1] === "10") {
        key += ".";
      } else if (item[j] + item[j + 1] === "11") {
        key += "-";
      } else if (item[j] + item[j + 1] === "00") {
        key += "";
      } else if (item[j] + item[j + 1] === "**") {
        key += "**";
      }
    }

    if (key === "**********") {
      result += " ";
    } else {
      result += MORSE_TABLE[key];
    }
  }

  return result;
}

module.exports = {
  decode,
};
