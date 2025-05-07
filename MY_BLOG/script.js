// Theme toggle using localStorage
const btn = document.getElementById('toggleTheme');

if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

if (btn) {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  });
}

