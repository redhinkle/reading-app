'use client'
import Image from "next/image";
import users from "../../../data/users.json";
import books from "../../../data/books.json";

//calculate book score
function getBookScore(book) {
  let score = book.score;
  let pages = parseInt(book.pages);
  let readingLevel = parseInt(book.readingDifficulty);

  score = (pages / 100) * (6 - readingLevel);

  return score;
}

books.forEach((book) => {
  getBookScore(book);
});

//calculate user score

users.forEach((user) => {
  let totalScore = user.totalScore;

  for (let i = 0; i < user.books.length; i++) {
    const bookTitle = user.books[i];
    const bookObject = books.find((book) => book.title === bookTitle);

    if (bookObject) {
      totalScore = totalScore + bookObject.score;
    }
  }
  user.totalScore = totalScore;
});


const UserPage = ({ params: { user } }) => {
    
    const thisUser = users.find((u) => u.username === user);
    return (
      <div className="container">
        {console.log(thisUser.books)}
        <h1>User</h1>
        <div className="card">
          <Image src={`/${thisUser.image}`} width={200} height={200} />
          <p>{thisUser.username}</p>
          <p>Score: {thisUser.totalScore}</p>
          <p>Books Read:</p>
          <ul>
            {thisUser.books.map((book, key) => (
              <li key={(Math.random() + key) * thisUser.books.length}>
                {book}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default UserPage