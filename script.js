const quotes = [
  'Believe you can and you\'re halfway there.',
  'Do one thing every day that scares you.',
  'Stay hungry, stay foolish.',
  'The best way to get started is to quit talking and begin doing.'
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[randomIndex];
}
