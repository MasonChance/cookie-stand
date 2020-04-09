'use strict';
console.log('hello, I work');

/* EXTRACT THE LITERALS INTO CONSTRUCTORS
TODO: create Constructor with parameters
TODO: create the methods using prototype
        1. remember this
        2. remember that some functions rely on others and be sure to call them with (); before doing anything else with the method. 
        3. be cognizant of which data is dynamic. 
TODO: create stand alone function  to create table header give it a class and an id for styling
TODO: create stand alone function to create table footergive it a class and an id for styling

TODO: wireframe the table and what information will go in which table location before getting started with the rendering functions
TODO: scafold the main elements of the table in HTML.
TODO:  create new function for generating hours open array based on open time and close time. 


*/

function Store(){
  // creates new store
  // declare parameters
}
Store.prototype.hoursOpen = function(){
  // not previously coded. outputs array of the hours based on open close time. 
  // displays with "am" and "pm" concatonation.
  // `if-else(){}` to check if before noon or after noon. 
}

Store.prototype.randomNumGen = function(){
  //generates random numbers for use later
  // see lines 18-19 of sales.js
};

Store.prototype.perHourCount = function(){
  //gets number of guest per hour for each hour open
  // see Sales.js:22-29
};

Store.prototype.cookiesPerHour = function(){
  // multiplies the total guests in given hour by avg number of cookies/guest-order 
  // loop for each hourOpen
  // returns Array of Expexted cookies
  // see lines 32-41 in sales.js
};

Store.prototype.dailyTotal = function(){
  // sums all cookie per hour totals from expected cookies array and returns single value. 
  // see lines 43-50 in sales.js
};

Store.prototype.renderToPage = function(){
  // renders previously generated data to table.
  // remember to call previous functions before coding any other action
  // remember to scaffold table in HTML with appropriate ID's 
  // where possible use the document methods to create elements and element attributes before outputting to page
};

var seattle = new Store();
console.log('seattle: ' + seattle);
console.log('randomNumGen: ' + Store.randomNumGen());
console.log('perHourCount: ' Store.perHourCount());
console.log('cookiesPerHour: ', + Store.cookiesPerHour());
console.log('dailyTotal: ', + Store.dailyTotal());
