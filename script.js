const bars = document.querySelector('.bars');
const headers = document.querySelector('.headers');
const list = document.querySelector('.list-items');

bars.addEventListener('click', () => {
  headers.classList.toggle('active');
});

list.addEventListener('click', () => {
  headers.classList.toggle('active');
});

// creating a div element
function iDiv(f = 'div') {
  if (!f) {
    f = 'div';
  }
  return document.createElement(f);
}

// project data declaration

const myProjectData = [
  {
    id: 'port1',
    title: 'Todo ',
    framework: ['CANOPY', 'Back End Dev', 2015],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript'],
    img: './images/TODO.JPG',
    Details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    liveLink: 'https://dmambo.github.io/todo/dist/',
    sourceLink: 'https://github.com/Dmambo/todo',
  },

  {
    id: 'port2',
    title: 'AwesomeBooks',
    framework: ['CANOPY', 'Back End Dev', 2015],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript'],
    img: './images/awesomebooks.JPG',
    Details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    liveLink: 'https://dmambo.github.io/Awesome-bookes6/',
    sourceLink: 'https://github.com/Dmambo/Awesome-bookes6',
  },

  {
    id: 'port3',
    title: 'Capstone',
    framework: ['CANOPY', 'Back End Dev', 2015],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript'],
    img: './images/capstone.JPG',
    Details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    liveLink: 'https://dmambo.github.io/capstone/',
    sourceLink: 'https://github.com/Dmambo/capstone',
  },

  {
    id: 'port4',
    title: 'Multi-Post Stories',
    framework: ['CANOPY', 'Back End Dev', 2015],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript'],
    img: './images/snapshoot-portfolio4.png',
    Details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    liveLink: 'https://dmambo.github.io/',
    sourceLink: '#',
  },
];

// collect data from the project

function collectData(id) {
  const len = myProjectData.length;
  let project;

  for (let i = 0; i < len; i += 1) {
    if (myProjectData[i].id === id) {
      project = myProjectData[i];
    }
  }

  if (project) {
    const container = iDiv('container');
    container.classList.add('popup-container');
    container.setAttribute('id', project.id);

    const workModal = iDiv();
    workModal.classList.add('work-modal');

    const workcarddetailsh2 = iDiv('h2');
    workcarddetailsh2.classList.add('workcarddetailsh2');
    workcarddetailsh2.innerText = project.title;

    const closebtn = iDiv('');
    closebtn.setAttribute('id', 'close-btn');
    closebtn.innerHTML = '<ion-icon name="close-outline" ></ion-icon>';

    const workcarddetailsul = iDiv('ul');
    workcarddetailsul.classList.add('workcarddetailsul');

    project.framework.forEach((f) => {
      const workcarddetailsli = iDiv('li');
      workcarddetailsli.classList.add('workcarddetailsli');
      workcarddetailsli.innerText = f;
      workcarddetailsul.appendChild(workcarddetailsli);
    });

    const image = iDiv();
    image.classList.add('work-img');
    image.innerHTML = `<img class='work-img' src='${project.img}' alt='${project.title}'/>`;

    const contain = iDiv();
    contain.classList.add('modal-block');

    const leftcontain = iDiv();
    leftcontain.classList.add('leftcontain');

    const rightcontain = iDiv();
    rightcontain.classList.add('rightcontain');

    const workcarddetailsp = iDiv('p');
    workcarddetailsp.classList.add('workcarddetailsp');
    workcarddetailsp.innerText = project.Details;
    leftcontain.append(workcarddetailsp);

    const workscul = iDiv('ul');
    workscul.classList.add('workscul');

    project.tags.forEach((tag) => {
      const workscli = iDiv('li');
      workscli.classList.add('workscli');
      workscli.innerText = tag;
      workscul.appendChild(workscli);
    });
    // button for live and source

    const access = iDiv();
    access.classList.add('access');

    const liveLink = iDiv('a');
    liveLink.classList.add('linkbtn');
    liveLink.setAttribute('href', project.liveLink);
    liveLink.innerHTML = 'See Live <span class="icon-btn"><img src="./images/icon.png" alt= "seelive"/></span';

    const sourceLink = iDiv('a');
    sourceLink.classList.add('linkbtn');
    sourceLink.setAttribute('href', project.sourceLink);
    sourceLink.innerHTML = 'See Source <span class="icon-btn"><img src="./images/vector.png" alt= "seesource"/></span';

    // appending all elemenet
    access.append(liveLink, sourceLink);

    rightcontain.append(workscul, access);

    contain.append(leftcontain, rightcontain);

    workModal.append(closebtn, workcarddetailsh2, workcarddetailsul, image, contain);

    container.append(workModal);

    document.querySelector('.hero').append(container);

    const close = document.getElementById('close-btn');
    close.addEventListener('click', () => {
      document.querySelector('.hero').removeChild(container);
    });
  }
}

// ADDING WORK TO PORTFOLIO DYNAMICALLY

function dynamicProject() {
  const portfolio = document.getElementById('portfolio');
  myProjectData.forEach((project) => {
    const card = iDiv();
    card.classList.add('workcard');
    // create image tag
    const workImg = iDiv();
    workImg.classList.add('work-img');
    workImg.innerHTML = `<img class='project-img' src='${project.img}' alt='${project.title}'/>`;
    card.appendChild(workImg);

    const workcarddetails = iDiv();
    workcarddetails.classList.add('workcarddetails');
    // create h2 tag
    const workcarddetailsh2 = iDiv('h2');
    workcarddetailsh2.classList.add('workcarddetailsh2');
    workcarddetailsh2.innerText = project.title;
    workcarddetails.appendChild(workcarddetailsh2);

    const workcarddetailsul = iDiv('ul');
    workcarddetailsul.classList.add('workcarddetailsul');

    // loop into the framework tag array
    project.framework.forEach((x) => {
      const workcarddetailsli = iDiv('li');
      workcarddetailsli.classList.add('workcarddetailsli');
      workcarddetailsli.innerText = x;
      workcarddetailsul.appendChild(workcarddetailsli);
    });
    workcarddetails.appendChild(workcarddetailsul);
    // create a paragraph tag
    const workcarddetailsp = iDiv('p');
    workcarddetailsp.classList.add('workcarddetailsp');
    workcarddetailsp.innerText = project.text;
    workcarddetails.appendChild(workcarddetailsp);

    const workscul = iDiv('ul');
    workscul.classList.add('workscul');
    // loop into the tag array and assign the elent to an li tag
    project.tags.forEach((tag) => {
      const workscli = iDiv('li');
      workscli.classList.add('workscli');
      workscli.innerText = tag;
      workscul.appendChild(workscli);
    });

    workcarddetails.appendChild(workscul);

    const workscbtn = iDiv('button');
    workscbtn.classList.add('works');
    workscbtn.innerHTML = 'See More';
    workscbtn.setAttribute('id', project.id);
    // show the popup window
    workscbtn.addEventListener('click', () => {
      collectData(project.id);
    });
    workcarddetails.appendChild(workscbtn);

    card.appendChild(workcarddetails);
    portfolio.appendChild(card);
  });
}
// display on screen
window.onload = () => {
  dynamicProject();

};

};
// form validation
const Email = document.getElementById('email');
const form = document.getElementById('form');

// send error message
const errMessage = (element, message) => {
  const formInput = element.parentElement;
  const errdisplay = formInput.querySelector('.warn');

  errdisplay.innerText = message;
  formInput.classList.add('warn');
  formInput.classList.remove('success');
};

//  Remove the error message
const successMessage = ((element) => {
  const formInput = element.parentElement;
  const errdisplay = formInput.querySelector('.warn');

  errdisplay.innerText = '';
  formInput.classList.add('success');
  formInput.classList.remove('warn');
});

const validation = () => {
  const email = Email.value.trim();
  // check if email is lowercase
  if (email !== email.toLowerCase()) {
    errMessage(Email, 'Email should be in lower case');
  } else {
    successMessage(Email);
    form.submit();
  }
};

function onsubmit(e) {
  e.preventDefault();

  validation();
}
form.addEventListener('submit', onsubmit);

// collect data
const Name = document.getElementById('name');
const Mail = document.getElementById('email');
const Message = document.getElementById('message');

// store the data
function storeData() {
  const formData = {
    Name: Name.value,
    Mail: Mail.value,
    Message: Message.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

// retrieve the data
function retrieveData() {
  if (!localStorage.getItem('formData')) {
    storeData();
  }

  const local = JSON.parse(localStorage.getItem('formData'));
  Name.setAttribute('value', local.Name);
  Mail.setAttribute('value', local.Mail);
  Message.setAttribute('value', local.Message);
}

// change the data
retrieveData();
Name.addEventListener('change', storeData);
Mail.addEventListener('change', storeData);
Message.addEventListener('change', storeData);

