/* 
You are given a dataset containing information about books in a library. Your task is to write JavaScript functions using higher-order functions to perform various operations on this dataset. The dataset is provided in the form of an array of objects, where each object represents a book.
 */
const library = [
{ 
   title: "The Great Gatsby", 
   author: "F. Scott Fitzgerald", 
   year: 1925,
   pages: 180 
},
{
title: "To Kill a Mockingbird",
author: "Harper Lee", 
year: 1960, 
pages: 281
},
{
title: "1984", 
author: "George Orwell", 
year: 1949, 
pages: 328 
},
{
title: "Pride and Prejudice", 
author: "Jane Austen", 
year: 1813,
pages: 432 
}, ]

/* 1. Total Number of Pages: Write a function getTotalPages that calculates and returns the total number of pages in the library. */

let getTotalPages = library.reduce((acc, currentBook) => {
    return (acc+currentBook.pages);
},0)

console.log(getTotalPages);



/* 2. List of Book Titles: Write a function getBookTitles that returns an array containing only the titles of the books in the library. */

 let getBookTitles = library.map((book)=>{
     return book.title;
 });

 console.log(getBookTitles);
 
/*3. Books Published After a Given Year: Write a function getBooksPublishedAfterYear(year) that takes a year as a parameter and returns an array containing the titles of books published after that year.*/
let year = 1900;
let getBooksPublishedAfterYear = library.filter((book) => {
    return book.year>year;
})
.map((book)=>{
    return book.title;
})
console.log(getBooksPublishedAfterYear);

/*4.Average Number of Pages: Write a function getAveragePages that calculates and returns the average number of pages across all books in the library. */

let getAveragePages = (library.reduce((acc, currentBook) =>{
  return (acc+currentBook.pages);
},0))/(library.length);

console.log(getAveragePages);

/*5.Longest Book: Write a function getLongestBook that returns the title of the book with the most pages*/
let maximumPage = 0;
let getLongestBook = library.reduce((maximumPage, book) => {
    maximumPage = (maximumPage > book.pages) ? maximumPage : book.pages;
    return maximumPage;
},0)

library.forEach((book) => {
    if(getLongestBook === book.pages)
    {
        console.log(book.title);
        return;
    }
})

/*6.Authors and Their Books: Write a function getAuthorsAndBooks that returns an object where the keys are author names and the values are arrays of book titles written by each author.*/

let getAuthorsAndBooks = library.reduce((acc, book)=>{
   let authorName = book.author;
   acc[authorName] = [book.title];
   return acc;
},{})
console.log(getAuthorsAndBooks);


/*7. Total Number of Pages by Author: Write a function getTotalPagesByAuthor that returns an object where the keys are author names and the values are the total number of pages of books written by each author.*/
/*Value will be total page count of all the books written by that author
If author A has written 5 books , then value will be sum of all pages of those 5 books */
// let getTotalNumberOfPages = library.reduce((acc, book)=>{
//     return acc + book.pages;
// },0);
let getTotalNumberOfPages = (authorName)=>{
    let sum = 0;
    for(let i = 0; i<library.length; i++)
    {
        if(library[i].author === authorName)
        {
           sum = sum+library[i].pages;
        }
    }
    return sum;
}
let getTotalPagesByAuthor = library.reduce((acc, book)=>{
   let authorName = book.author;
   acc[authorName] = getTotalNumberOfPages(authorName);
   return acc;
},{})

console.log(getTotalPagesByAuthor);

/*8.Advanced: Filter and Map: Write a function getShortestBookByAuthor that returns an object where the keys are author names and the values are the titles of the shortest book written by each author.*/
let getTitlesOfShortestBookByAuthor = function(authorName) {
    let shortestBook ;
    let count = 0;
    let titleOfBook;
    for(let i = 0; i<library.length; i++)
    {
        if(authorName===library[i].author)
        {
            count++;
            if(count===1)
            {
                shortestBook = library[i].pages;
            }
           shortestBook = library[i].pages < shortestBook ? library[i].pages : shortestBook ;
        }
        
    }
    for (const book of library) {
        if(book.pages===shortestBook && book.author===authorName)
        {
            titleOfBook = book.title;
        }
    }
    return titleOfBook;
}
let getShortestBookByAuthor = library.reduce((acc, book)=>{
   let authorName = book.author;
   acc[authorName] = getTitlesOfShortestBookByAuthor(authorName);
   return acc;
},{})

console.log(getShortestBookByAuthor);