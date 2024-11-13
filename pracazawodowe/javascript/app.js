const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const themeTitle = document.getElementById('themeTitle');
const logo = document.getElementById('logo');
// BUTTON DO ZMIENIANIA MOTYWU
const themeToggleBtn = document.getElementById('changeTheme');

function toggleSidebar() {
  themeTitle.classList.toggle('none');
  sidebar.classList.toggle('close');
  toggleButton.classList.toggle('rotate');
  themeToggleBtn.classList.toggle('shrink');
  logo.classList.toggle('shrinkTitle')
}





// TOGGLE MOTYWU
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  // PRZECIWNY MOTYW
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
}

themeToggleBtn.addEventListener('click', toggleTheme);