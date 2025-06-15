
function openLink(url) {
  window.open(url, '_blank');
}

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

function openChat() {
  document.getElementById("aiChat").style.display = "block";
}
function closeChat() {
  document.getElementById("aiChat").style.display = "none";
}
function sendMsg() {
  const input = document.getElementById("chatInput");
  const msgs = document.getElementById("chatMsgs");
  const userTxt = input.value.trim(); if (!userTxt) return;
  msgs.innerHTML += `<div class="msg user">${userTxt}</div>`;
  input.value = "";
  setTimeout(() => {
    msgs.innerHTML += `<div class="msg ai">Here’s an AI-powered reply…</div>`;
    msgs.scrollTop = msgs.scrollHeight;
  }, 800);
}

function openShineModal() {
  document.getElementById("shineModal").style.display = "flex";
}
function closeShineModal() {
  document.getElementById("shineModal").style.display = "none";
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
  }, 1500); // 1.5s delay
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});



