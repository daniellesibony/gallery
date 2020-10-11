'use strict'

const STORAGE_KEY = 'booksDB';
const PAGE_SIZE = 5;
var gNames = ['Tuesdays with Morrie', 'Why Men Love Bitches', '7 Habits of Highly Effective People'];
var gImages = ['book1', 'whymenlovebitches', 'book3']
var gBooks;
var gPageIdx = 0

_createBooks();



function getBooks(type, isAscending) {
    var fromIdx = gPageIdx * PAGE_SIZE;
    var books = gBooks.slice(fromIdx, fromIdx + PAGE_SIZE)
    if (!type) return books;
    if (type === 'name') {
        books.sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1 *isAscending;
            }
            if (nameA > nameB) {
                return 1 * isAscending;
            }
            return 0;
        })
    } else {
        books.sort(function (a, b) {
            return (a.price - b.price) * isAscending;
        })
    }
    return books;

}

function getAllBooks() {
    return gBooks;
}

function getNames() {
    return gNames;
}


function removeBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage();
}

function addBook(name, price) {
    var book = _createBook(name)
    book.price = price
    gBooks.unshift(book)
    _saveBooksToStorage();
}


function getBookById(bookId) {
    var book = gBooks.find(function (book) {
        return bookId === book.id
    })
    return book;
}

function updateBook(bookId, price) {
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === bookId;
    })
    gBooks[bookIdx].price = price;
    _saveBooksToStorage();
}



function _createBook(name, image) {
    return {
        id: makeId(),
        name,
        price: getRandomIntInclusive(8, 20),
        desc: makeLorem(),
        image,
        rate: 0
    }
}


function _createBooks() {
    var books = loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) {
        books = []
        for (var i = 0; i < 3; i++) {
            var name = gNames[i]
            var img = gImages[i]
            books.push(_createBook(name, img))
        }
    }
    gBooks = books
    console.log(gBooks)
    _saveBooksToStorage();
}

function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}


function rateBook(bookId, diff) {
    var book = getBookById(bookId)
    var bookRating = book.rate + diff
    if (bookRating < 0 || bookRating > 10) {
        return;
    }
    book.rate += diff;
    _saveBooksToStorage()
}


