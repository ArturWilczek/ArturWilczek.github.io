const liczebniki = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
];

const mixed = [];
let current = -1;

const b01 = document.getElementById("b01");
const b02 = document.getElementById("b02");
const i01 = document.getElementById("i01");
const d01 = document.getElementById("d01");
const l01 = document.getElementById("l01");

b01.addEventListener("click", sprawdz);
b02.addEventListener("click", next);

function next() {
  b01.hidden = false;
  b02.hidden = true;
  i01.hidden = false;
  l01.hidden = false;
  current++;
  if (current > 19) {
    mix();
    current = 0;
  }
  d01.innerHTML = mixed[current];
  i01.value = "";
  i01.focus();
  setMessage("");
}

function sprawdz() {
  let liczebnik = mixed[current];
  let wpisany = i01.value.trim().toLowerCase();
  if (!wpisany) return;
  if (wpisany !== liczebniki[liczebnik - 1])
    setMessage(
      `<b>BŁĄD!</b><br>Wpisałeś: <b>${wpisany.toUpperCase()}</b><br>Powinno być: <b>${liczebniki[
        liczebnik - 1
      ].toUpperCase()}</b>`,
      false
    );
  else setMessage(`<b>BRAWO!</b><br><b>${liczebnik}</b> to <b>${wpisany.toUpperCase()}</b>`, true);
  b01.hidden = true;
  b02.hidden = false;
  i01.hidden = true;
  l01.hidden = true;
}

function setMessage(txt, ok) {
  const msg = document.getElementById("message");
  msg.innerHTML = txt;
  msg.className = "text-center";
  if (ok) msg.className += " text-success";
  else msg.className += " text-danger";
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function mix() {
  for (let i = 0; i < 20; i++) mixed[i] = i + 1;
  for (let i = 0; i < 10000; i++) {
    let i1 = getRandomInt(0, 20);
    let i2 = getRandomInt(0, 20);
    let tmp = mixed[i1];
    mixed[i1] = mixed[i2];
    mixed[i2] = tmp;
  }
}

function start() {
  mix();
  next();
}

start();
