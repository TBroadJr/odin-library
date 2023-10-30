const myLibrary = [];

let mainContainer = document.querySelector('.main');

const modal = document.querySelector('dialog');
const showModal = document.querySelector('.showModal');
const closeModal = document.querySelector('.closeModal');

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const isCompletedInput = document.querySelector('#isCompleted');

showModal.addEventListener('click', () => {
  modal.showModal();
});

closeModal.addEventListener('click', () => {
  let newBook = new Book(authorInput.value, titleInput.value, pagesInput.value, isCompletedInput.checked);
  addBookToLibrary(newBook);
  resetInputs();
  modal.close();
});

modal.addEventListener('close', () => {
  updateDisplay();
});

function Book(author, title, pages, isCompleted) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isCompleted = isCompleted;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function resetInputs() {
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  isCompletedInput.checked = false;
}

function deleteItem(index) {
  myLibrary.splice(index, 1);
  updateDisplay();
}


function updateDisplay() {
  mainContainer.innerHTML = '';
  for(let i = 0; i < myLibrary.length; i++) {
    const item = myLibrary[i];

    const bookCard = document.createElement('div');
    bookCard.classList.add('bookItem');
    bookCard.dataset.arrayItem = i;
  
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const bookState = document.createElement('p');

    const readButn = document.createElement('button');
    readButn.classList.add('read-butn');
    readButn.textContent = item.isCompleted ? 'unfinished' : 'finished';
  
    const deleteButn = document.createElement('button');
    deleteButn.classList.add('.delete-butn');
    deleteButn.textContent = 'Delete';

    readButn.addEventListener('click', () => {
      if (myLibrary[i].isCompleted) {
        myLibrary[i].isCompleted = false;
      } else {
        myLibrary[i].isCompleted = true;
      }
      updateDisplay();
    })
  
    deleteButn.addEventListener('click', () => {
      deleteItem(i);
    })
  
    bookTitle.textContent = `Title: ${item.title}`;
    bookAuthor.textContent = `Author: ${item.author}`;
    bookPages.textContent = `Page Number: ${item.pages}`;
    bookState.textContent = `Has Completed: ${item.isCompleted}`;
  
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookState);
    bookCard.appendChild(readButn);
    bookCard.appendChild(deleteButn);
  
    mainContainer.appendChild(bookCard);
  }
}