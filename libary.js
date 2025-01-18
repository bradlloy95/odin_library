
const myLibrary = [];
const TheHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, null)
addBookToLibrary(TheHobbit)
let libraryCTR = document.getElementById('library-ctr');
const deleteBTN = document.querySelector('.button');
const box = document.getElementById('model-box')
const bookTitle = document.getElementById('title');
const errorBox = document.getElementById('error');

document.addEventListener('DOMContentLoaded', function(){
    updateUserLibaray(myLibrary)
})

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (isRead === null) {
        this.isRead = 'Not read'
    } else if (isRead === 'on'){
        this.isRead = 'Read';
    }

    
  // the constructor...
}

function addBookToLibrary(object) {
  // do stuff here
  myLibrary.push(object)
  
}

function updateUserLibaray(myLibrary){
    libraryCTR.innerHTML= '';
    myLibrary.forEach(book => {
        let cover = document.createElement('div');
        cover.classList.add('cover');
        cover.innerHTML = `
        <h3>${book.title}</h3>
        <h4>${book.author}</h4>
        <h4>${book.pages} pages</h4>        
        <h4>${book.isRead}</h4> 
               
        `
        
        
        const delBTN = document.createElement('button')
        delBTN.classList.add('button')
        delBTN.innerText = 'Delete'
        delBTN.addEventListener('click', function(){
           delBook(book)
        });
        const readBTN = document.createElement('button');
        readBTN.classList.add('button')
        readBTN.innerHTML = 'Read'
        readBTN.addEventListener('click', function() {
            changeRead(book);

        })
        cover.appendChild(readBTN)
        cover.appendChild(delBTN)

        libraryCTR.appendChild(cover);
    })
}

const myForm = document.getElementById('myform')
// listen for form being submitted
myForm.addEventListener("submit", (event) => {
    let messages = []
    if (bookTitle.value === '' || bookTitle.value == null) {
        console.log('error')
        messages.push('title is required')
    }
    if (messages.length > 0){
        event.preventDefault();
        errorBox.innerText = messages.join(', ')
        box.showModal();
        return

        
    }
    const formdata = new FormData(myForm);
    const title= formdata.get('title');
    const author = formdata.get('author');
    const pages = formdata.get('pages');
    const isRead = formdata.get('read');
    //console.log('rrgfr', isRead)
    // create object
    const object = new Book(title, author, pages, isRead)
    addBookToLibrary(object)
   
    // clear form inputs
    myForm.reset();
    box.close()

    updateUserLibaray(myLibrary)    
    errorBox.innerText = ''

})




function delBook(book) {
    console.log(book);
    const index = myLibrary.findIndex(x => x.title === book.title)
    myLibrary.splice(index, 1)
    
    updateUserLibaray(myLibrary)
}

function changeRead(book){
    console.log(book.isRead)
    if (book.isRead === 'Read'){
        book.isRead = 'Not read'
    } else {
        book.isRead = 'Read'
    }
    updateUserLibaray(myLibrary)
}

const newBook = document.getElementById('model');
const closeBTN = document.getElementById('close-model');

newBook.addEventListener('click', () => {
    box.showModal();
  })
closeBTN.addEventListener('click', () => {
    box.close();
  })

 



