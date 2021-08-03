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
    name: 'Titus Muthomi',
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
    name: 'Kelvin Mwenda',
    description: 'Lead Pastor at Grace point church Kikuyu.',
  },
  {
    image: './images/jack.jpg',
    name: 'Steve Mwenje',
    description: 'Lead Pastor at Grace point church Kikuyu.',
  },
];

const section = document.querySelector('.featured');
const dynamicContent = `
<h2 class="program-heading">Featured Speakers</h2>
            <hr class="line">
            <div class="speakers">
              <card class="speaker first">
                <img src=${speakers[0].image} alt="Speaker" class="speaker-img">
                <div class="speaker-info">
                  <h3 class="speaker-name">${speakers[0].name}</h3>
                  <p class="speaker-desc">${speakers[0].description}
                  </p>
                  <p>Holds a masters in Divinity from Afric Inland University.</p>
                </div>
              </card>

               <card class="speaker first">
                <img src=${speakers[1].image} alt="Speaker" class="speaker-img">
                <div class="speaker-info">
                  <h3 class="speaker-name">${speakers[1].name}</h3>
                  <p class="speaker-desc">${speakers[1].description}
                  </p>
                  <p>Holds a masters in Divinity from Afric Inland University.</p>
                </div>
              </card>
            </div>
            <div class="speakers">
               <card class="speaker first">
                <img src=${speakers[2].image} alt="Speaker" class="speaker-img">
                <div class="speaker-info">
                  <h3 class="speaker-name">${speakers[2].name}</h3>
                  <p class="speaker-desc">${speakers[2].description}
                  </p>
                  <p>Holds a masters in Divinity from Afric Inland University.</p>
                </div>
              </card>

               <card class="speaker first">
                <img src=${speakers[3].image} alt="Speaker" class="speaker-img">
                <div class="speaker-info">
                  <h3 class="speaker-name">${speakers[3].name}</h3>
                  <p class="speaker-desc">${speakers[3].description}
                  </p>
                  <p>Holds a masters in Divinity from Afric Inland University.</p>
                </div>
              </card>
            </div>
            <div class="speakers">


              <card class="speaker first">
                <img src=${speakers[4].image} alt="Speaker" class="speaker-img">
                <div class="speaker-info">
                  <h3 class="speaker-name">${speakers[4].name}</h3>
                  <p class="speaker-desc">${speakers[4].description}
                  </p>
                  <p>Holds a masters in Divinity from Afric Inland University.</p>
                </div>
              </card>

               <card class="speaker first">
                <img src=${speakers[5].image} alt="Speaker" class="speaker-img">
                <div class="speaker-info">
                  <h3 class="speaker-name">${speakers[5].name}</h3>
                  <p class="speaker-desc">${speakers[5].description}
                  </p>
                  <p>Holds a masters in Divinity from Afric Inland University.</p>
                </div>
              </card>
            </div>

            <div class="button-container">
              <button>More<span class="material-icons material-icons-outlined arrow">
                  keyboard_arrow_down
                </span></button>

            </div>
`;
section.innerHTML = dynamicContent;
