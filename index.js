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

function losujLiczebnik() {
  losowy = getRandomInt(1, 20);
  console.log(losowy);
  document.getElementById("liczba").innerHTML = losowy;
  document.getElementById("liczebnik").value = "";
  setMessage("");
}

document.getElementById("liczebnik").addEventListener("keyup", (e) => {
  if (e.keyCode != 13) return;
  let wpisany = e.target.value.trim().toLowerCase();
  console.log(wpisany);
  if (wpisany !== liczebniki[losowy - 1])
    setMessage(
      `BŁAD! Prawidłowa wartość to <b>${liczebniki[
        losowy - 1
      ].toUpperCase()}</b>`,
      false
    );
  else setMessage(`BRAWO!`, true);
});

function setMessage(txt, ok) {
  const msg = document.getElementById("message");
  msg.innerHTML = txt;
  if (ok) msg.className = "text-success";
  else msg.className = "text-danger";
}

document.getElementById("btn").addEventListener("click", losujLiczebnik);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

losujLiczebnik();
