
// Toggle AI Assistant chatbox
document.addEventListener("DOMContentLoaded", () => {
  const button = document.createElement("div");
  button.id = "ai-assist-button";
  button.innerHTML = "🤖";
  document.body.appendChild(button);

  const chatbox = document.createElement("div");
  chatbox.id = "ai-chatbox";
  chatbox.innerHTML = "<p>Hi, I’m Trinity.<br>Need help exploring this site?</p>";
  document.body.appendChild(chatbox);

  button.addEventListener("click", () => {
    chatbox.style.display = chatbox.style.display === "none" ? "block" : "none";
  });
});
