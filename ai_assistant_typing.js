
// Trinity Assistant with typing effect
document.addEventListener("DOMContentLoaded", () => {
  const button = document.createElement("div");
  button.id = "ai-assist-button";
  button.innerHTML = "🤖";
  document.body.appendChild(button);

  const chatbox = document.createElement("div");
  chatbox.id = "ai-chatbox";
  document.body.appendChild(chatbox);

  const message = "Hi, I’m Trinity.\nNeed help exploring this site?";

  function typeWriter(text, el, i = 0) {
    if (i < text.length) {
      el.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
      setTimeout(() => typeWriter(text, el, i + 1), 35);
    }
  }

  button.addEventListener("click", () => {
    if (chatbox.style.display === "block") {
      chatbox.style.display = "none";
      chatbox.innerHTML = "";
    } else {
      chatbox.style.display = "block";
      chatbox.innerHTML = "<p></p>";
      typeWriter(message, chatbox.querySelector("p"));
    }
  });
});
