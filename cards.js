let ytc = "#your-card-display";
let ytc_total = "#your-total";
let ytc_score = 0;
let btc = "#bot-card-display";
let btc_total = "#bot-total";
let user_score = 0;
let win = 0;
let loss = 0;
let draw = 0;
let flag = true;

let num = [
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
];

const swish_sound = new Audio("sounds/swish.m4a");
const loss_sound = new Audio("sounds/aww.mp3");
const win_sound = new Audio("sounds/cash.mp3");

document.querySelector("#hit").addEventListener("click", start_game);

function start_game() {
  document.getElementById("stand").disabled = false;
  document.getElementById("deal").disabled = false;
  let screen = document.querySelector(ytc);
  let img = document.createElement("img");
  let memo = RandomImage();
  img.src = "images/" + memo + ".png";
  img.style.width = "110px";
  img.style.height = "150px";
  screen.appendChild(img);
  swish_sound.play();

  ytc_score += resultConversion(memo);
  if (ytc_score > 21) {
    document.querySelector(ytc_total).innerHTML = "Burst";
    const btn = document.getElementById("hit");
    btn.disabled = true;
    if (flag) bot_start();
  } else if (ytc_score < 21) {
    console.log(ytc_score);
    document.querySelector(ytc_total).innerHTML = ytc_score;
  } else if (ytc_score == 21) {
    console.log(ytc_score);
    document.querySelector(ytc_total).innerHTML = ytc_score;
    const btn = document.getElementById("hit");
    btn.disabled = true;
    if (flag) bot_start();
  }
}

document.querySelector("#stand").addEventListener("click", () => {
  const btn = document.getElementById("hit");
  btn.disabled = true;
  if (flag) bot_start();
});

document.querySelector("#deal").addEventListener("click", () => {
  ytc = "#your-card-display";
  ytc_total = "#your-total";
  ytc_score = 0;
  btc = "#bot-card-display";
  btc_total = "#bot-total";
  user_score = 0;
  flag = true;
  num = num = [
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
  ];
  document.getElementById("your-card-display").innerHTML = "";
  document.getElementById("bot-card-display").innerHTML = "";
  document.querySelector("#bot-total").innerHTML = "";
  document.querySelector("#your-total").innerHTML = "";
  document.getElementById("stand").disabled = true;
  document.getElementById("deal").disabled = true;
  let comentory = (document.querySelector("#comment").innerHTML = "Let's Play");
  const btn = document.getElementById("hit");
  btn.disabled = false;
});

function bot_start() {
  let temp_score =
    Math.floor(Math.random() * 3) + Math.floor(Math.random() * 3);
  if (temp_score == 0) temp_score = 2;
  ytc = btc;
  ytc_total = btc_total;
  user_score = ytc_score;
  ytc_score = 0;
  flag = false;
  while (temp_score-- > 0) {
    start_game();
  }
  console.log("me: " + user_score + " bot: " + ytc_score);
  console.log(win + " " + loss + " " + draw);
  if (user_score < ytc_score && user_score < 21) {
    if (ytc_score > 21) {
      win += 1;
      let comentory = (document.querySelector("#comment").innerHTML =
        "You Won");
      // comentory.style.color = "green";
      win_sound.play();
    } else {
      loss += 1;
      let comentory = (document.querySelector("#comment").innerHTML =
        "You Lost");
      // comentory.style.color = "red";
      loss_sound.play();
    }
  } else if (user_score > ytc_score && ytc_score < 21) {
    if (user_score > 21) {
      loss += 1;
      let comentory = (document.querySelector("#comment").innerHTML =
        "You Lost");
      // comentory.style.color = "red";
      loss_sound.play();
    } else {
      win += 1;
      let comentory = (document.querySelector("#comment").innerHTML =
        "You Won");
      // comentory.style.color = "green";
      win_sound.play();
    }
  } else if (user_score === ytc_score || (user_score > 21 && ytc_score > 21)) {
    draw += 1;
    let comentory = (document.querySelector("#comment").innerHTML = "Draw");
    loss_sound.play();
    // comentory.style.color = "yellow";
  }
  console.log(win + " " + loss + " " + draw);
  document.querySelector("#win").innerHTML = win.toString();
  document.querySelector("#loss").innerHTML = loss.toString();
  document.querySelector("#draw").innerHTML = draw.toString();
}

function RandomImage() {
  let temp = Math.floor(Math.random() * num.length); //gets a random index from num
  let temp_2 = num[temp]; // stores the element at index temp
  let last_var = num[num.length - 1]; //stores the last element in the list
  num[num.length - 1] = temp_2;
  num[temp] = last_var;
  num.pop();
  return temp_2;
}

function resultConversion(royalvalue) {
  switch (royalvalue) {
    case "one":
      return 1;
      break;

    case "two":
      return 2;
      break;

    case "three":
      return 3;
      break;

    case "four":
      return 4;
      break;

    case "five":
      return 5;
      break;

    case "six":
      return 6;
      break;

    case "seven":
      return 7;
      break;

    case "eight":
      return 8;
      break;

    case "nine":
      return 9;
      break;

    case "ten":
      return 10;
      break;

    case "eleven":
      return 11;
      break;

    case "twelve":
      return 12;
      break;

    default:
      return 13;
      break;
  }
}
