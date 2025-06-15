
// Create the cursor dot
const cursorDot = document.createElement("div");
cursorDot.classList.add("cursor-dot");
document.body.appendChild(cursorDot);

// Track mouse movement
document.addEventListener("mousemove", (e) => {
  cursorDot.style.top = e.clientY + "px";
  cursorDot.style.left = e.clientX + "px";
});
