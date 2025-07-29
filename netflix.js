
// Movie details data (example, update as needed)
const movieDetails = [
  {
    title: 'Squid Game',
    img: './image/Squidgame.jpg',
    description: 'Hundreds of cash-strapped players accept a strange invitation to compete in children’s games. Inside, a tempting prize awaits — with deadly high stakes.'
  },
  {
    title: 'Raid 2',
    img: './image/Raid2.jpg',
    description: 'A police officer goes undercover in a ruthless Jakarta crime syndicate to protect his family and uncover corruption.'
  },
  {
    title: 'The Great Kapil',
    img: './image/Greatkapil.jpg',
    description: 'A comedy show featuring Kapil and his team, bringing laughter and fun to your screens.'
  },
  {
    title: 'Jaat',
    img: './image/Jaat.jpg',
    description: 'A story of courage and tradition in rural India.'
  },
  {
    title: 'HIT',
    img: './image/HIt.jpg',
    description: 'A cop with a traumatic past must solve a high-profile case.'
  },
  {
    title: 'Ranna',
    img: './image/Ranna.jpg',
    description: 'A family drama with action and emotion.'
  },
  {
    title: 'Thug Life',
    img: './image/Thuglife.jpg',
    description: 'A gangster rises to power in the underworld.'
  },
  {
    title: 'Chhava',
    img: './image/Chhava.jpg',
    description: 'A historical epic of valor and sacrifice.'
  },
  {
    title: 'Retro',
    img: './image/Retro.jpg',
    description: 'A nostalgic journey through classic cinema.'
  },
  {
    title: 'Sikandar',
    img: './image/Sikandar.jpg',
    description: 'A tale of ambition and destiny.'
  }
];

// Create modal HTML
function createModal() {
  const modal = document.createElement('div');
  modal.id = 'movie-modal';
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100vw';
  modal.style.height = '100vh';
  modal.style.background = 'rgba(0,0,0,0.7)';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.zIndex = '1000';
  modal.innerHTML = `
    <div id="modal-content" style="background:#181818; color:#fff; padding:24px; border-radius:8px; max-width:350px; text-align:center; position:relative;">
      <span id="close-modal" style="position:absolute; top:8px; right:16px; font-size:24px; cursor:pointer;">&times;</span>
      <img id="modal-img" src="" alt="Movie Image" style="width:100%; border-radius:8px; margin-bottom:16px;">
      <h2 id="modal-title"></h2>
      <p id="modal-desc" style="margin-top:12px;"></p>
    </div>
  `;
  document.body.appendChild(modal);
  // Close modal on click
  modal.querySelector('#close-modal').onclick = () => modal.remove();
  // Close modal if clicking outside content
  modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  return modal;
}

// Add click listeners to trending movies
document.addEventListener('DOMContentLoaded', () => {
  const movieEls = document.querySelectorAll('.movie-row .movies');
  movieEls.forEach((el, idx) => {
    el.style.cursor = 'pointer';
    el.onclick = () => {
      let modal = document.getElementById('movie-modal');
      if (!modal) modal = createModal();
      const details = movieDetails[idx];
      if (details) {
        modal.querySelector('#modal-img').src = details.img;
        modal.querySelector('#modal-title').textContent = details.title;
        modal.querySelector('#modal-desc').textContent = details.description;
        modal.style.display = 'flex';
      }
    };
  });
});
