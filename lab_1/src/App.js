// import logo from './logo.svg';
import './App.css';

function App() {
  let book = {
    title: "The Witcher Sword of Destiny",
    author: "Anjey Sapkowski",
    genre: "fantasy",
    pageCount: 247,
    reviews: [
      "I have loved this series for many years now. When I read it, it was arguably the least famous one among my favourite fantasy series. The Witcher Saga by Polish author Andrzej Sapkowski is still something of a diamond in the rough, with its own very particular sense of raw beauty. This is not something I’d recommend to just about anyone, but I would call it absodamnlutely amazing without a moment of hesitation.",
      "While it is not a part of the main saga per se, The Last Wish is definitely my favourite Witcher book. It’s a collection of tales about a man hunting monsters for money. And it's amazingly good. It is also definitely the place to start reading Witcher stories for those looking for a gateway into this wonderful world.",
      "Like a lot of other people, I was introduced to the world of Andrzej Sapkowski through the video games The Witcher and The Witcher II: Assassins of Kings. These are easily some of the best fantasy RPG's ever made (I would certainly recommend them to all the gamers here), and they made me want to know more about this fascinating world. And as much as love the books, I will continue to insist that the more recent third game in the series, The Witcher III: Wild Hunt is the single greatest contribution to the Witcher universe, let alone the greatest fantasy RPG of our time."
    ]
  }
  return (
    <div>
      <h1>{book.title}</h1>
      <h2>by {book.author}</h2>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Page count:</strong> {book.pageCount}</p>
      <h3>Reviews:</h3>
      <ul>
        <li>{book.reviews[0]}</li>
        <li>{book.reviews[1]}</li>
        <li>{book.reviews[2]}</li>
      </ul>
    </div>
  );
}

export default App;
