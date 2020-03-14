const menu = document.getElementById('menu');
const sendBtn = document.getElementById('send-btn');
const closeBtn = document.getElementById('close-btn');
const form = document.getElementById('quote-form');

menu.addEventListener('click', (event) => {
  menu.querySelectorAll('li').forEach(element => element.classList.remove('active'));
  event.target.parentNode.classList.add('active');
});

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
