(function () {
  var button = document.querySelector('[data-theme-toggle]');
  if (!button) return;

  function updateLabel() {
    var current = document.documentElement.dataset.theme;
    var next = current === 'dark' ? 'Light' : 'Dark';
    button.textContent = next;
    button.setAttribute('aria-label', 'Switch to ' + next.toLowerCase() + ' theme');
  }

  button.addEventListener('click', function () {
    var current = document.documentElement.dataset.theme;
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('portfolio-theme', next);
    updateLabel();
  });

  updateLabel();
}());

