let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let usercard = document.getElementById("usercard");

let first_name = document.createElement("p");
let username = document.createElement("p");
let ava = document.createElement("p");

first_name.innerText = `${tg.initDataUnsafe.user.first_name}`
username.innerText = `@${tg.initDataUnsafe.user.username}`
ava.innerText = `${tg.initDataUnsafe.user.photo_url}`

usercard.appendChild(first_name);
usercard.appendChild(username);
usercard.appendChild(ava);