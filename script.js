const quotes = [
  'Anita is always correct',
  'Frank is always wrong',
  'A foolish man, Frank was once called',
  'Give Gebba (Spelling) a pet from Ed',
  'Frank is a half decent bloke',
  'Frank, who used to be the tank',
  'Ok, i"m running out of Frank quotes',
  'All quality Frank material is now gone'
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[randomIndex];
}

body {
  font-family: Arial;
  text-align: center;
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("frank.jpg"); /* put your image in the repo */
  background-size: cover;
  background-position: center;
}
