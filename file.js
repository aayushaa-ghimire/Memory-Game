const emojis = [
  '🍎',
  '🍎',
  '🍇',
  '🍇',
  '🍓',
  '🍓',
  '🍍',
  '🍍',
  '🥝',
  '🥝',
  '🌸',
  '🌸',
];
const board = document.getElementById('game-board');
const stats = document.getElementById('stats');
const overlay = document.getElementById('overlay');
const msg = document.getElementById('msg');
const btn = document.getElementById('btn');

let flipped = [];
let matches = 0;
let tries = 0;

function initGame() {
  overlay.classList.add('hidden');
  matches = 0;
  tries = 0;
  stats.innerText = 'Matches: 0 | Tries: 0';

  const shuffled = [...emojis].sort(() => Math.random() - 0.5);
  board.innerHTML = '';

  shuffled.forEach((emoji) => {
    const div = document.createElement('div');
    div.className = 'card flipped';
    div.innerHTML = `<span class="emoji">${emoji}</span>`;
    div.dataset.value = emoji;
    div.onclick = () => flip(div);
    board.appendChild(div);
  });

  setTimeout(() => {
    document
      .querySelectorAll('.card')
      .forEach((c) => c.classList.remove('flipped'));
  }, 2000);
}

function flip(card) {
  if (flipped.length < 2 && !card.classList.contains('flipped')) {
    card.classList.add('flipped');
    flipped.push(card);

    if (flipped.length === 2) {
      tries++;
      stats.innerText = `Matches: ${matches} | Tries: ${tries}`;
      check();
    }
  }
}

function check() {
  const [c1, c2] = flipped;
  if (c1.dataset.value === c2.dataset.value) {
    matches++;
    flipped = [];
    if (matches === 6) showGameOver();
  } else {
    setTimeout(() => {
      c1.classList.remove('flipped');
      c2.classList.remove('flipped');
      flipped = [];
    }, 1000);
  }
}

function showGameOver() {
  overlay.classList.remove('hidden');
  msg.innerText = `You Won! Total Tries: ${tries}`;
  btn.innerText = 'Play Again';
}
