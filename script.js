function copyToClipboard() {
  const text = document.getElementById("copyText");
  text.select();
  document.execCommand("copy");

  document.getElementById("msg").innerText = "Text copied to clipboard!";
}
