const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.closeButton');
const mobileMenu = document.querySelector('.mobile');

const showMenu = () => {
  mobileMenu.style.display = 'flex';
};

const hideMenu = () => {
  mobileMenu.style.display = 'none';
};

const checkWidth = () => {
  if (
    document.documentElement.clientWidth > 767 && mobileMenu.style.display === 'flex'
  ) {
    mobileMenu.style.display = 'none';
  }
};

menu.addEventListener('click', showMenu);
closeButton.addEventListener('click', hideMenu);
window.onresize = checkWidth;

const speakers = [
  {
    image: './images/jack.jpg',
    name: 'John Mwihaki',
    description: 'Lead Pastor at Grace point church Kikuyu.',
  },
  {
    image: './images/jack.jpg',
    name: 'Ruben Pire',
    description: 'Lead Pastor at Grace point church Kikuyu.',
  },
  {
    image: './images/jack.jpg',
    name: 'Eric Mutwiri',
    description: 'Lead Pastor at Grace point church Kikuyu.',
  },
  {
    image: './images/jack.jpg',
    name: 'Faith Muthoni',
    description: 'Lead Pastor at Grace point church Kikuyu.',
  },
  {
    image: './images/jack.jpg',
    name: 'Steve Mwenje',
    description: 'Lead Pastor at Grace point church Kikuyu.',
  },
  {
    image: './images/jack.jpg',
    name: 'Kelvin Mwenda',
    description: 'Lead Pastor at Grace point church Kikuyu.',
  },
];

speakers.forEach((speaker) => {
  const div = document.querySelector('.speakers');
  const dynamicContent = `
              <card class="speaker ">
                <img src=${speaker.image} alt="Speaker" class="speaker-img">
                <div class="speaker-info">
                  <h3 class="speaker-name">${speaker.name}</h3>
                  <p class="speaker-desc">${speaker.description}
                  </p>
                  <p>Holds a masters in Divinity from Afric Inland University.</p>
                </div>
              </card>
            </div>
`;
  div.innerHTML += dynamicContent;
});
