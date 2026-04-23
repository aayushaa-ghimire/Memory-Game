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
let flippedCards = [];
let matchCount = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function initGame() {
  const shuffledEmojis = shuffle([...emojis]);
  gameBoard.innerHTML = '';
  matchCount = 0;
  resultDisplay.innerText = 'Matches: 0';

  shuffledEmojis.forEach((emoji) => {
    const card = document.createElement('div');
    card.classList.add('card', 'flipped'); // Start flipped to show
    card.innerHTML = `<span class="emoji">${emoji}</span>`;
    card.dataset.emoji = emoji;

    card.addEventListener('click', () => flipCard(card));
    gameBoard.appendChild(card);
  });

  // Hide after 2 seconds
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
    checkMatch();
  }
}

function checkMatch() {
  const [c1, c2] = flippedCards;
  if (c1.dataset.emoji === c2.dataset.emoji) {
    matchCount++;
    resultDisplay.innerText = 'Matches: ' + matchCount;
    flippedCards = [];
  } else {
    setTimeout(() => {
      c1.classList.remove('flipped');
      c2.classList.remove('flipped');
      flippedCards = [];
    }, 1000);
  }
}

initGame();
