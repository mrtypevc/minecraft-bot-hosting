function copyCode(btn) {
  const textarea = btn.previousElementSibling;
  navigator.clipboard.writeText(textarea.value);
  alert("Copied!");
}
