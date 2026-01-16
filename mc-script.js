function copyCode(btn) {
  const textarea = btn.previousElementSibling;
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  document.execCommand("copy");

  btn.innerText = "Copied ✓";
  setTimeout(() => btn.innerText = "Copy", 1500);
}
