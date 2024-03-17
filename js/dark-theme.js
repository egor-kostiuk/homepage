const btnDarkMode = document.querySelector('.dark-mode-btn');

// checking theme in localStorage
if (localStorage.getItem('darkMode') === 'dark') {
  btnDarkMode.classList.add('dark-mode-btn--active');
  document.body.classList.add('dark');
}

// turning on dark mode
btnDarkMode.onclick = function() {
  btnDarkMode.classList.toggle('dark-mode-btn--active');
  const isDark = document.body.classList.toggle('dark');

  // add theme to localStorage
  isDark ? localStorage.setItem('darkMode', 'dark') : localStorage.setItem('darkMode', 'light')
}