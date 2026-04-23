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
const gameBoard = document.getElementById('game-board');
const resultDisplay = document.getElementById('match');
const gameOverScreen = document.getElementById('game-over');

let flippedCards = [];
let matchCount = 0;
let tries = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function initGame() {
  matchCount = 0;
  tries = 0;
  flippedCards = [];
  gameOverScreen.classList.add('hidden');
  resultDisplay.innerText = 'Matches: 0 | Tries: 0';

  const shuffledEmojis = shuffle([...emojis]);
  gameBoard.innerHTML = '';

  shuffledEmojis.forEach((emoji) => {
    const card = document.createElement('div');
    card.classList.add('card', 'flipped');
    card.innerHTML = `<span class="emoji">${emoji}</span>`;
    card.dataset.emoji = emoji;
    card.addEventListener('click', () => flipCard(card));
    gameBoard.appendChild(card);
  });

  // Hide cards after 2 seconds
  setTimeout(() => {
    document
      .querySelectorAll('.card')
      .forEach((c) => c.classList.remove('flipped'));
  }, 2000);
}

function flipCard(card) {
  if (flippedCards.length >= 2 || card.classList.contains('flipped')) return;

  card.classList.add('flipped');
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    tries++;
    checkMatch();
  }
}

function checkMatch() {
  const [c1, c2] = flippedCards;
  const isMatch = c1.dataset.emoji === c2.dataset.emoji;

  resultDisplay.innerText = `Matches: ${matchCount + (isMatch ? 1 : 0)} | Tries: ${tries}`;

  if (isMatch) {
    matchCount++;
    flippedCards = [];
    if (matchCount === 6) {
      setTimeout(() => {
        document.getElementById('final-stats').innerText =
          `You finished in ${tries} tries!`;
        gameOverScreen.classList.remove('hidden');
      }, 500);
    }
  } else {
    setTimeout(() => {
      c1.classList.remove('flipped');
      c2.classList.remove('flipped');
      flippedCards = [];
    }, 1000);
  }
}

// Start the game for the first time
initGame();
