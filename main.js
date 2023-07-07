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
  
    <li><a href="/.about.html">About</a></li>
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
    description: ' Create a spa-like atmosphere where attendees can indulge in rejuvenating treatments featuring prickly pear seeds oil. This could include facial treatments, body massages, and pampering sessions using products infused with the oil is nourishing properties.',
  },

  {
    icon: 'images/workshop.png',
    title: 'Wellness Activities:',
    description: ' Organize wellness activities such as yoga sessions, meditation workshops, or guided nature walks to promote overall well-being. Highlight the connection between nature, mindfulness, and the power of natural ingredients like prickly pear seeds oil.',
  },

  {
    icon: 'images/workshop.png',
    title: 'Product Showcase:',
    description: ' Set up a dedicated area to showcase the company is range of skincare and wellness products. Allow attendees to sample and purchase products, providing them with an opportunity to experience the luxurious qualities of prickly pear seeds oil firsthand.',
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

// person section

const persons = [
  {
    name: 'Peter',
    image: 'images/peter2.jpg',
    description: 'Peter, our accomplished CEO, leads with vision and expertise, propelling our company to new heights of success. His strategic acumen and commitment to innovation drive our team to deliver exceptional results.',
    role: 'Chief Executive Officer (CEO)',
  },
  {
    name: 'Mayssa',
    image: 'images/mayssa5.webp',
    description: "Responsible for developing and executing the company's marketing strategies.",
    role: 'Chief Marketing Officer (CMO)',
  },
  {
    name: 'Santiago',
    image: 'images/santiago3.jpeg',
    description: "Manages the company's financial operations, including budgeting, financial planning, and financial reporting.",
    role: 'Chief Financial Officer (CFO)',
  },
  {
    name: 'Catherine',
    image: 'images/catherine4.jpeg',
    description: 'Oversees the day-to-day operations of the company, ensuring efficient and effective processes across various departments.',
    role: 'Chief Operations Officer (COO)',
  },
  {
    name: 'Stellar',
    image: 'images/stellar1.jpeg',
    description: 'Responsible for aligning technology initiatives with business objectives, managing IT infrastructure, and driving digital transformation.',
    role: 'Chief Technology Officer (CTO)',
  },
  {
    name: 'Houda',
    image: 'images/houda6.jpg',
    description: 'Oversees all aspects of human resources, including recruitment, employee relations, training and development, and HR policies.',
    role: 'Human Resources Director',
  },
];

const section3 = document.querySelector('.section3');

let displayedPersons = persons.slice(0, 5);

function renderPersons(personsArray) {
  const htmlContent = `
    <h2>Founders</h2>
    <div class="line"></div>
    <div class="speakers">
      ${personsArray
    .map(
      (person) => `
          <div class="person">
            <img class="personImage" src="${person.image}" alt="${person.name}_image">
            <div class="clm2">
              <h2 class="name">${person.name}</h2>
              <p class="p1">${person.description}</p>
              <div class="line2"></div>
              <p class="p2">${person.role}</p>
            </div>
          </div>
        `,
    )
    .join('')}
        <div id="more" class="more">MORE
        <img src="images/arrow_down 1.png" alt="arrow-icon">
      </div>
      <div id="less" class="more" style="display: none;">LESS
        <img src="images/arrow_up.png" alt="arrow-icon">
      </div>
    </div>
  `;

  section3.innerHTML = htmlContent;

  const more = document.getElementById('more');
  const less = document.getElementById('less');

  more.addEventListener('click', () => {
    displayedPersons = persons.slice(0);
    renderPersons(displayedPersons);
    more.style.display = 'flex';
    less.style.display = personsArray.length > 2 ? 'flex' : 'none';
  });

  less.addEventListener('click', () => {
    displayedPersons = persons.slice(0, 2);
    renderPersons(displayedPersons);
    console.log('click');
  });
}

if (window.innerWidth <= 768) {
  displayedPersons = persons.slice(0, 2);
  renderPersons(displayedPersons);
  console.log('Small screen');
} else {
  // Code to execute if the screen width is greater than 768 pixels
  console.log('Large screen');
}
renderPersons(displayedPersons);
