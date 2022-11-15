const bars = document.querySelector('.bars');
const headers = document.querySelector('.headers');
const list = document.querySelector('.list-items');

bars.addEventListener('click', () => {
  headers.classList.toggle('active');
});

list.addEventListener('click', () => {
  headers.classList.toggle('active');
});

let ProjectList = [
  {
      title: 'My First Project',
      imageLink: '#',
      technologies: ['HTML/CSS', 'Ruby on Rails', 'Java'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      link: { href: '#', value: 'See project' },
      githubLink: { href: '#', value: 'See Github' },
      demoLink: { href: '#', value: 'See Demo' },
  },
  {
      title: 'My Second Project',
      imageLink: '#',
      technologies: ['HTML/CSS', 'Ruby on Rails', 'Java'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      link: { href: '#', value: 'See project' },
      githubLink: { href: '#', value: 'See Github' },
      demoLink: { href: '#', value: 'See Demo' },
  },
  {
      title: 'My Third Project',
      imageLink: '#',
      technologies: ['HTML/CSS', 'Ruby on Rails', 'Java'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      link: { href: '#', value: 'See project' },
      githubLink: { href: '#', value: 'See Github' },
      demoLink: { href: '#', value: 'See Demo' },
  },
  {
      title: 'My Fourth Project',
      imageLink: '#',
      technologies: ['HTML/CSS', 'Ruby on Rails', 'Java'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      link: { href: '#', value: 'See project' },
      githubLink: { href: '#', value: 'See Github' },
      demoLink: { href: '#', value: 'See Demo' },
  },
  {
      title: 'My Fifth Project',
      imageLink: '#',
      technologies: ['HTML/CSS', 'Ruby on Rails', 'Java'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      link: { href: '#', value: 'See project' },
      githubLink: { href: '#', value: 'See Github' },
      demoLink: { href: '#', value: 'See Demo' },
  },
  {
      title: 'My Sixth Project',
      imageLink: '#',
      technologies: ['HTML/CSS', 'Ruby on Rails', 'Java'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      link: { href: '#', value: 'See project' },
      githubLink: { href: '#', value: 'See Github' },
      demoLink: { href: '#', value: 'See Demo' },
  },
]