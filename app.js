const main = document.querySelector(".main");

const abjad = [
  "a",
  "A",
  1,
  "b",
  "B",
  2,
  "c",
  "C",
  3,
  "d",
  "D",
  4,
  "e",
  "E",
  5,
  "f",
  "F",
  6,
  "g",
  "G",
  7,
  "h",
  "H",
  8,
  "i",
  "I",
  9,
  "j",
  "J",
  0,
  "k",
  "K",
  "l",
  "L",
  "m",
  "M",
  "n",
  "N",
  "o",
  "O",
  "p",
  "P",
  "q",
  "Q",
  "r",
  "R",
  "s",
  "S",
  "t",
  "T",
  "u",
  "U",
  "v",
  "V",
  "w",
  "W",
  "x",
  "X",
  "y",
  "Y",
  "z",
  "Z",
];

let pass = "";

const verif = (pasw) => {
  let angka = "";
  for (let i = 0; i < pasw.length; i++) {
    if (pasw[i] >= 0) {
      angka += `${pasw[i]}`;
    }
  }
  if (angka.length == 3) {
    pass = pasw;
  } else {
    acak();
  }
};

const acak = () => {
  let pasw = "";
  for (let i = 0; i < 8; i++) {
    pasw += abjad[Math.floor(Math.random() * 62)];
  }
  verif(pasw);
};

document.addEventListener("load", acak());
main.innerHTML = pass;
