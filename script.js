const quotes = [
  'Anita is always correct',
  'Frank is always wrong',
  'A foolish man, Frank was once called',
  'Give Gebba (Spelling) a pet from Ed'
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[randomIndex];
}
