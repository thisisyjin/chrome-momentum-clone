const quotes = [
  {
    quote: 'Think like a man of action and act like man of thought.',
    author: 'Henri Bergson',
  },
  {
    quote:
      'Courage is very important. Like a muscle, it is strengthened by use.',
    author: 'Ruth Gordon',
  },
  {
    quote:
      'Life is the art of drawing sufficient conclusions from insufficient premises.',
    author: 'Samuel Butler',
  },
  {
    quote: 'By doubting we come at the truth.',
    author: 'Peter Abelard',
  },
  {
    quote:
      'A man that hath no virtue in himself, ever envieth virtue in others.',
    author: 'francis bacon',
  },
  {
    quote: 'When money speaks, the truth keeps silent.',
    author: 'Sujata Iyer',
  },
  {
    quote: 'Better the last smile than the first laughter.',
    author: 'John Ray',
  },
  {
    quote:
      'In the morning of life, work; in the midday, give counsel; in the evening, pray.',
    author: 'Hesiod',
  },
  {
    quote: 'Painless poverty is better than embittered wealth.',
    author: 'Greek Proverbs',
  },
  {
    quote: 'A poet is the painter of the soul.',
    author: 'Isaac D Israeli',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
