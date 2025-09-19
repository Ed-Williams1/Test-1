const quotes = [
  'Anita is always correct',
  'Frank is always wrong',
  'A foolish man, Frank was once called',
  'Give Gebba a pet from Ed',
  'Frank is a half decent bloke',
  'Frank, who used to be the tank',
  'Ok, i am running out of Frank quotes',
  'All quality Frank material is now gone'
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[randomIndex];
}
