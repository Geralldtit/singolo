const menu = document.getElementById('menu');
const sendBtn = document.getElementById('send-btn');
const closeBtn = document.getElementById('close-btn');
const form = document.getElementById('quote-form');

window.onscroll = function() {stickHeader()};

var header = document.getElementsByClassName("header")[0];
var sticky = header.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

menu.addEventListener('click', (event) => {
  menu.querySelectorAll('li').forEach(element => element.classList.remove('active'));
  event.target.parentNode.classList.add('active');
});

// function cancelSubmit(f) {
//   if(confirm("Are you sure?"))
//     f.submit
//   return false;
// }

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
