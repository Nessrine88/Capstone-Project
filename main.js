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
    <li><a href="https://nessrine88.github.io/Capstone-Project/">About</a></li>
    <li><a href="#">Program</a></li>
    <li><a href="#">Join</a></li>
    <li><a href="#">Sponsor</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">CC Campaign</a></li>
  </ul>

  <div class="logo"><a href="https://nessrine88.github.io/Capstone-Project/"><img src="images/White And Black Modern Abstract Beauty Logo.png"  alt="logo"> </a></div>
  


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

// popup

// Program data
const programs = [
  {
    icon: 'images/workshop.png',
    title: 'Workshops and Demonstrations',
    description: 'Offer educational sessions and interactive workshops led by skincare experts, nutritionists, and wellness practitioners. Participants can learn about the benefits of prickly pear seeds oil, skincare routines, healthy eating habits, and holistic wellness practices.',
  },

  {
    icon: 'images/workshop.png',
    title: 'Spa and Relaxation:',
    description: ' Create a spa-like atmosphere where attendees can indulge in rejuvenating treatments featuring prickly pear seeds oil. This could include facial treatments, body massages, and pampering sessions using products infused with the oil' / 's nourishing properties.',
  },

  {
    icon: 'images/workshop.png',
    title: 'Wellness Activities:',
    description: ' Organize wellness activities such as yoga sessions, meditation workshops, or guided nature walks to promote overall well-being. Highlight the connection between nature, mindfulness, and the power of natural ingredients like prickly pear seeds oil.',
  },

  {
    icon: 'images/workshop.png',
    title: 'Product Showcase:',
    description: ' Set up a dedicated area to showcase the company' / 's range of skincare and wellness products. Allow attendees to sample and purchase products, providing them with an opportunity to experience the luxurious qualities of prickly pear seeds oil firsthand.',
  },

  {
    icon: 'images/workshop.png',
    title: 'Expert Panel and Q&A Sessions:',
    description: ' Arrange a panel discussion featuring industry experts, scientists, or influencers who can share insights on skincare, natural beauty, and sustainable practices. Engage attendees in Q&A sessions, allowing them to ask questions and gain valuable knowledge.',
  },

];

// Get all program class elements
const programElements = document.querySelectorAll('.prog');

// Add click event listener to each program element
programElements.forEach((programElement, index) => {
  const seeMoreLink = programElement.querySelector('a');

  seeMoreLink.addEventListener('click', (e) => {
    e.preventDefault();

    // Create popup container
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');

    // Create popup content
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    // Create close button
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.textContent = 'X';

    // Create H2 element
    const h2Element = document.createElement('h2');
    h2Element.textContent = programs[index].title;

    // Create paragraph element
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = programs[index].description;

    // Append H2, paragraph, and close button to popup content
    popupContent.appendChild(closeButton);
    popupContent.appendChild(h2Element);
    popupContent.appendChild(paragraphElement);

    // Append popup content to popup container
    popupContainer.appendChild(popupContent);

    // Append popup container to the body
    document.body.appendChild(popupContainer);

    // Add click event listener to close the popup
    closeButton.addEventListener('click', () => {
      // Remove the popup container
      popupContainer.remove();
    });
  });
});
