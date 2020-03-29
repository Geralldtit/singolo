const hamburger = document.getElementById('hamburger');
const menuSmall = document.getElementById('menu-small');
const menu = document.getElementById('menu');
const tags = document.getElementById('tags');
const sendBtn = document.getElementById('send-btn');
const closeBtn = document.getElementById('close-btn');
const form = document.getElementById('quote-form');
const portfolioItems = document.getElementById('items');
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');
const verticalPhone = document.getElementById('vertical-phone-btn');
const horizontalPhone = document.getElementById('horizontal-phone-btn');
const slides = document.querySelectorAll('.slide');
var timerId;

/*============================== Header ==============================*/

hamburger.addEventListener('click', toggleHamburger);
menuSmall.addEventListener('click', toggleHamburger);

function toggleHamburger(){
  hamburger.classList.toggle('rotated');
  document.getElementById('menu-small').classList.toggle('invisible');
}

menu.addEventListener('click', (event) => {
  menu.querySelectorAll('li').forEach(element => element.classList.remove('active'));
  event.target.closest('li').classList.add('active');
});

document.addEventListener("scroll", (function() {
  const curPos = window.scrollY,
        sect = document.querySelectorAll("main > section"),
        links = document.querySelectorAll('header li a');
  sect.forEach((function(sect) {
    if( (sect.offsetTop <= curPos + 95) && (sect.offsetTop + sect.offsetHeight) > (curPos + 95) ){
      links.forEach(function(a) {
        a.parentNode.classList.remove('active');
        if(sect.getAttribute('id') === a.getAttribute('href').substring(1)){
          a.parentNode.classList.add('active');
        }
      })
    }
  }))
}));

/*============================== Slider ================================*/

prevBtn.addEventListener('click', () =>{
  clearInterval(timerId);
  let counter = 0;
  let slider = document.getElementById('home');
  timerId = setInterval(() => {
    document.querySelectorAll('.slide').forEach( (item) => {
      if(item.style.left === '-940px'){
        clearInterval(timerId);
        swapTwoSlides('');
        return;
      }else {
        counter -= 10;
        item.style.left = `${counter}px`;
      }
    });
  }, 10);
});

nextBtn.addEventListener('click', () =>{
  clearInterval(timerId);
  swapTwoSlides('-940px');
  let counter = -940;
  timerId = setInterval(() => {
    document.querySelectorAll('.slide').forEach( (item) => {
      if(item.style.left === '0px'){
        clearInterval(timerId);
        clearSlidesPosition();
        return;
      }else {
        counter += 10;
        item.style.left = `${counter}px`;
      }
    });
  }, 10);
});

function swapTwoSlides(offset){
  let slides = document.querySelectorAll('.slide');
  slides.forEach( (item) => {item.style.left='0px';})
  slides[1].parentNode.insertBefore(slides[1], slides[0]);
  if(offset != '') {
    slides.forEach( (item) => {item.style.left=offset;})
  }
}

function clearSlidesPosition(){
  let slides = document.querySelectorAll('.slide');
  slides.forEach( (item) => {item.style.left='0px';})
}

verticalPhone.addEventListener('click', () => {
  document.getElementById('vertical-black-screen').classList.toggle('visible');
});

horizontalPhone.addEventListener('click', () => {
  document.getElementById('horizontal-black-screen').classList.toggle('visible');
});

/*============================== Porfolio ==============================*/

tags.addEventListener('click', (event) => {
  tags.querySelectorAll('li').forEach(element => element.classList.remove('active'));
  event.target.closest('li').classList.add('active');
  swapTwoElements();
});

function swapTwoElements(){
  let items = document.getElementsByClassName('item');
  let randomElement = randomInteger(1, items.length);
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
  if(document.getElementById('name').checkValidity() &&
      document.getElementById('email').checkValidity()) {
        const subject = document.getElementById('subject').value.toString();
        const describe = document.getElementById('describe').value.toString();
        document.getElementById('result-subject').innerText = subject == "" ? "Без темы" : "Тема: " + subject;
        document.getElementById('result-describe').innerText = describe == "" ? "Без описания" : "Описание: " + describe;
        document.getElementById('message-block').classList.remove('hidden');
    }
});

closeBtn.addEventListener('click', (event) => {
  document.getElementById('result-subject').innerText = document.getElementById('result-describe').innerText = "";
  document.getElementById('message-block').classList.add('hidden');
  document.getElementById('quote-form').reset();
});
