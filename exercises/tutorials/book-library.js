
//try and solve this too 
/*  Create a system to register books in a library. The system should allow adding books, but only if they meet certain criteria.
Requirements
1. Check if the book is a fiction or non-fiction.
2. Only register non-fiction books.
3. Only register books with more than 100 pages.
4. Log the registration details to the console.
*/

class Book {
    constructor(title, author, genre, pages) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pages = pages;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    registerBook(book) {
        if (this.isValidBook(book)) {
            this.books.push(book);
            this.logRegistration(book);
        } else {
            console.log(`Failed to register book: ${book.title}`);
        }
    }

    isValidBook(book) {
        return book.genre.toLowerCase() === 'non-fiction' && book.pages > 100;
    }

    logRegistration(book) {
        console.log(`Book Registered: Title='${book.title}', Author='${book.author}', Pages=${book.pages}`);
    }
}

// Example usage:
const library = new Library();

const book1 = new Book("A Brief History of Time", "Stephen Hawking", "Non-Fiction", 256);
const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 180);
const book3 = new Book("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", "Non-Fiction", 443);
const book4 = new Book("Short Stories", "Various", "Non-Fiction", 99);

library.registerBook(book1);  // This should be registered
library.registerBook(book2);  // This should not be registered
library.registerBook(book3);  // This should be registered
library.registerBook(book4);  // This should not be registered