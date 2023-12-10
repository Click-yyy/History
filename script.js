let a,b;a = window.location.href;
setInterval(() => {
  b = Math.floor(Math.random() * 9999);
  window.location.href = a + '#' + b;
}, 40);
