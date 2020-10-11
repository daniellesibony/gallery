'use strict'

var gIsAscending = 1;


function onInit() {
    renderBooks()
}

function toggleIsAscending (){
    gIsAscending = gIsAscending * -1
}



function renderBooks(type = null) {
    var books = getBooks(type, gIsAscending)
    toggleIsAscending()
    var strHtmls = books.map(function (book) {
        return `
        <tr>
        <td> ${book.id} </td>
        <td> ${book.name}</td>
        <td> ${book.price}</td>
        <td> <button onclick="onReadBook('${book.id}')">Read</button></td>
        <td> <button onclick="onUpdateBook('${book.id}')">Update</button></td>
        <td> <button onclick="onRemoveBook('${book.id}')">Delete</button></td>
        </tr>
        `
    })
    strHtmls.unshift(`<tr>
    <th> ID </th>
    <th onclick="onSortBy('name')">Name </th>
    <th onclick="onSortBy('price')"> Price </th>
    <th colspan="3"> Actions </th>
    </tr>`)
    document.querySelector('.book-container tbody').innerHTML = strHtmls.join('')
}



function onAddBook() {
    var elName = document.querySelector('.add-book input[name=name]'); //[]= attrtibute
    var elPrice = document.querySelector('.add-book input[name=price]');
    var name = elName.value;
    var price = elPrice.value;
    addBook(name, price)
    elName.value = '';
    elPrice.value = '';
    renderBooks()
}

function onRemoveBook(bookId) {
    removeBook(bookId);
    renderBooks();
}


function onUpdateBook(bookId) {
    var price = +prompt('What is the updated price of this book?');
    updateBook(bookId, price);
    renderBooks();
}

function renderModal(bookId) {
    var book = getBookById(bookId)
    var elModal = document.querySelector('.modal')
    var strHTML = `
    <h1>Book Details</h1> 
    <img src="./img/${book.image}.jpg"/> 
    <h5>${book.name}</h5>
    <h6>${book.price}</h6>
    <p>${book.desc}</p>
    <div class="rate-button">
        <button onclick="onRateBook('${book.id}', -1)">-</button>
        <p>${book.rate}</p>
        <button onclick="onRateBook('${book.id}', 1)">+</button>
    </div>
    <button onclick="onCloseModal()">close</button>
    `
    elModal.innerHTML = strHTML
    elModal.hidden = false;

}

function onCloseModal() {
    document.querySelector('.modal').hidden = true
}

function onRateBook(bookId, diff) {
    rateBook(bookId, diff)
    renderModal(bookId);
}

function onReadBook(bookId) {
    renderModal(bookId);
}


function onSortBy(type){
renderBooks(type)
}
