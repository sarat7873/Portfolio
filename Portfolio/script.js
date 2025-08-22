
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});


const typedText = document.querySelector(".typing");
let i = 0;
const text = "MERN Stack Developer | UI/UX Enthusiast";
function type() {
  if(i < text.length) {
    typedText.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();


const themeBtn = document.querySelector('.theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");

function showProject(title) {
  modalTitle.innerText = title;
  modalDesc.innerText = `You clicked on "${title}". Here you can add more details about this project, technologies used, and live/demo links.`;
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if(event.target == modal) {
    modal.style.display = "none";
  }
}


const contactForm = document.querySelector('.contact form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been received.");
  contactForm.reset();
});

document.querySelectorAll('.hero .btn, .hero .btn-outline').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("This button is clickable! You can add links or scroll behavior.");
  });
});
