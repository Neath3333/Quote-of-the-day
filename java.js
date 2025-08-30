const quotes = [
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { text: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
  { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
  { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
  { text: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
  { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" }
];
const backgrounds = [
  "linear-gradient(135deg, #89f7fe, #02275cff)",
  "linear-gradient(135deg, #f6d365, #fda085)",
  "linear-gradient(135deg, #84fab0, #8fd3f4)",
  "linear-gradient(135deg, #fccb90, #d57eeb)",
  "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  "linear-gradient(135deg, #466365ff, #5e94dfff)",
  "linear-gradient(135deg, #d2a614ff, #723c2dff)",
  "linear-gradient(135deg, #84fab0, #8fd3f4)",
  "linear-gradient(135deg, #ac7f48ff, #782e8aff)",
  "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  "linear-gradient(135deg, #00c6ff, #0072ff)",
  "linear-gradient(135deg, #f7971e, #ffd200)",
  "linear-gradient(135deg, #56ab2f, #a8e063)",
  "linear-gradient(135deg, #614385, #516395)",
  "linear-gradient(135deg, #eecda3, #ef629f)",
  "linear-gradient(135deg, #4ca1af, #c4e0e5)",
  "linear-gradient(135deg, #283c86, #45a247)",
  "linear-gradient(135deg, #ff9966, #ff5e62)",
  "linear-gradient(135deg, #00b09b, #96c93d)",
  "linear-gradient(135deg, #8e2de2, #4a00e0)",
  "linear-gradient(135deg, #ffe259, #ffa751)",
  "linear-gradient(135deg, #396afc, #2948ff)",
  "linear-gradient(135deg, #ff6a00, #ee0979)",
  "linear-gradient(135deg, #bdc3c7, #2c3e50)",
  "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
  "linear-gradient(135deg, #fc4a1a, #f7b733)",
  "linear-gradient(135deg, #30cfd0, #330867)",
  "linear-gradient(135deg, #d66d75, #e29587)",
  "linear-gradient(135deg, #232526, #414345)",
  "linear-gradient(135deg, #ff7e5f, #feb47b)"
];

// Check if we already saved a quote
let lastShown = localStorage.getItem("lastShownTime");
let lastIndex = localStorage.getItem("lastQuoteIndex");

const now = Date.now(); // current time in ms
const oneHour = 1000 * 60 * 60; // 1 hour in ms

let index;

// If never shown OR more than 1 hour has passed → pick new quote
if (!lastShown || now - lastShown > oneHour) {
  index = Math.floor(Math.random() * quotes.length); // pick random quote
  localStorage.setItem("lastShownTime", now);
  localStorage.setItem("lastQuoteIndex", index);
} else {
  // Use last shown quote
  index = lastIndex;
}

// Display quote and background
document.getElementById("quote").innerText = "“" + quotes[index].text + "”";
document.getElementById("author").innerText = "— " + quotes[index].author;
document.body.style.background = backgrounds[index];
