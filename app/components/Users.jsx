// 'use client'
import Link from 'next/link'
import React from 'react'
import users from '../../data/users.json'
import books from '../../data/books.json'

//calculate book score
function getBookScore(book) {
    let score = book.score
    let pages = parseInt(book.pages)
    let readingLevel = parseInt(book.readingDifficulty)

    score = (pages / 100) * (6 - readingLevel)
    
    return score;
}

books.forEach(book => {
    getBookScore(book)
})

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
    user.totalScore = totalScore
      
  }
  
  );
const Users = async () => {

  return (
    <div className="container">
      <h1>Top Users</h1>
      <ul className="userList">
        {users.map((user, index) => (
          <li key={user.id} className="card">
            <Link href={`/users/${user.username}`}>
              <p>
                <span className="userRank">Rank #{index + 1}</span>
              </p>
              <p className="userListScore">
                <span>
                  <strong>Name:</strong> {user.username}
                </span>
                <span>
                  <strong>Score:</strong> {user.totalScore}
                </span>
              </p>
              <p>
                <strong>Recent Book:</strong>{" "}
                {user.books.length > 0 ? user.books.slice(-1)[0] : "N/A"}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users