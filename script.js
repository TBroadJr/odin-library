const myLibrary = [];

function Book(author, title, pages, isCompleted) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isCompleted = isCompleted;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}