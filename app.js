const cheerio = require('cheerio');
const fetch = require('node-fetch');

// const $ = cheerio.load('<h2 class="title">Hello world</h2>'); // We pass in html here

// $('h2.title').text('Hello there!');
/* 
    Look for an h2 with a title class. Then it inserts Hello there! into that section of html.
*/
   
//   we can also do things like this
// let classTitle = $('.title'); // Where we also are looking for html that HAS a class of title.
// console.log(classTitle.text()); // This get the text found at the DOM object that has a class of title

// $('h2').addClass('welcome');

// const html = $.html();
// console.log(html);


// Ok so a more advanced version
const getESPN = async() => {
    const response = await fetch('https://espn.com'); // This sends a GET to a web server API.
    // The response is just a HTTP object.
    const html = await response.text(); // This command resends a request to just receive html.
    // At this point, we have a string with all html

    const $ = cheerio.load(html); // the html we have returned will go here.
    // At this point we cheerio has parsed the html and is ready to perform operations.
    const moduleHeader = $('.module__header'); // here we will pass in the class

    console.log(moduleHeader.text());
}

getESPN();
