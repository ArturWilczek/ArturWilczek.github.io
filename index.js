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

let losowy;
const b01 = document.getElementById("b01");
const b02 = document.getElementById("b02");
const i01 = document.getElementById("i01");
const d01 = document.getElementById("d01");

b01.addEventListener("click", sprawdz);
b02.addEventListener("click", losujLiczebnik);

function losujLiczebnik() {
  b01.hidden = false;
  b02.hidden = true;
  losowy = getRandomInt(1, 20);
  d01.innerHTML = losowy;
  i01.value = "";
  setMessage("");
}

function sprawdz() {
  let wpisany = i01.value.trim().toLowerCase();
  if (!wpisany) return;
  if (wpisany !== liczebniki[losowy - 1])
    setMessage(`BŁAD! Prawidłowo: <b>${liczebniki[losowy - 1].toUpperCase()}</b>`, false);
  else setMessage(`BRAWO!`, true);
  b01.hidden = true;
  b02.hidden = false;
}

function setMessage(txt, ok) {
  const msg = document.getElementById("message");
  msg.innerHTML = txt;
  if (ok) msg.className = "text-success";
  else msg.className = "text-danger";
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function start() {
  losujLiczebnik();
}

start();
