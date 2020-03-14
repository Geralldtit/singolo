const menu = document.getElementById('menu');
const tags = document.getElementById('tags');
const sendBtn = document.getElementById('send-btn');
const closeBtn = document.getElementById('close-btn');
const form = document.getElementById('quote-form');
const portfolioItems = document.getElementById('items');

/*============================== Header ==============================*/
menu.addEventListener('click', (event) => {
  menu.querySelectorAll('li').forEach(element => element.classList.remove('active'));
  event.target.parentNode.classList.add('active');
});

/*============================== Porfolio ==============================*/
tags.addEventListener('click', (event) => {
  tags.querySelectorAll('li').forEach(element => element.classList.remove('active'));
  event.target.parentNode.classList.add('active');
  swapTwoElements();
});

function swapTwoElements(){
  let items = document.getElementsByClassName('item');
  let randomElement = randomInteger(0, items.length);
  items[randomElement].parentNode.insertBefore(items[randomElement], items[0]);
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

portfolioItems.addEventListener('click', (event) => {
  portfolioItems.querySelectorAll('.item').forEach(item => item.classList.remove('selected-item'));
  event.target.closest('.item').classList.add('selected-item');
})

/*============================== Quote ==============================*/
sendBtn.addEventListener('click', () => {
  const subject = document.getElementById('subject').value.toString();
  const describe = document.getElementById('describe').value.toString();
  document.getElementById('result-subject').innerText = subject == "" ? "Без темы" : "Тема: " + subject;
  document.getElementById('result-describe').innerText = describe == "" ? "Без описания" : "Описание: " + describe;
  document.getElementById('message-block').classList.remove('hidden');
});

closeBtn.addEventListener('click', (event) => {
  document.getElementById('result-subject').innerText = document.getElementById('result-describe').innerText = "";
  document.getElementById('message-block').classList.add('hidden');
});
