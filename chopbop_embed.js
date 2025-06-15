
function openChopbopModal() {
  document.getElementById("chopbopModal").style.display = "block";
}
function closeChopbopModal() {
  document.getElementById("chopbopModal").style.display = "none";
}

// Optional: Close modal on outside click
window.onclick = function(event) {
  const modal = document.getElementById("chopbopModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
