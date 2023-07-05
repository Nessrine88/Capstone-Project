const header = document.querySelector('.header');
const div = document.createElement('div');

const menu = document.querySelector('.menu');
div.classList.add('menuListmob');
div.style.display = 'none'; // Set initial display style to "none"
div.innerHTML = `
  <div class="menu">
    <div id="closeBtn">
      <img src="images/close.jpeg" alt="close button image">
    </div>
  </div>
  <ul>
  <li><a href="http://127.0.0.1:3000/Home/index.html">Home</a></li>
    <li><a href="http://127.0.0.1:3000/About/index.html">About</a></li>
    <li><a href="#">Program</a></li>
    <li><a href="#">Join</a></li>
    <li><a href="#">Sponsor</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">CC Campaign</a></li>
  </ul>

  <div class="logo"><img src="images/White And Black Modern Abstract Beauty Logo.png" alt="logo" ></div>
  <div id="menuList">


`;
header.appendChild(div);

const menuBar = document.getElementById('menuBar');
const closeBtn = document.getElementById('closeBtn');

function toggleMenu() {
  if (div.style.display === 'none') {
    div.style.display = 'block';
    menuBar.style.display = 'none';
    menu.style.display = 'none';
    closeBtn.style.display = 'flex';
  } else {
    div.style.display = 'none';
    menuBar.style.display = 'block';
    menu.style.display = 'flex';
    closeBtn.style.display = 'none';
  }
}

menuBar.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

// see less person section

const more = document.getElementById('more');
const imElements = document.querySelectorAll('.im');
const less = document.getElementById('less');

more.addEventListener('click', () => {
  imElements.forEach((element) => {
    element.style.display = 'flex';
  });
  more.style.display = 'none';
  less.style.display = 'flex';
});

less.addEventListener('click', () => {
  imElements.forEach((element) => {
    if (element.style.display === 'none') {
      element.style.display = 'flex';
    } else {
      element.style.display = 'none';
    }
  });
});
