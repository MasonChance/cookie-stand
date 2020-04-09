'use strict';
console.log('hello, I work');

/* EXTRACT THE LITERALS INTO CONSTRUCTORS
TODO: create the methods using prototype
        1. remember this
        2. remember that some functions rely on others and be sure to call them with (); before doing anything else with the method. 
        3. be cognizant of which data is dynamic. 
TODO: create stand alone function  to create table header give it a class and an id for styling
TODO: create stand alone function to create table footergive it a class and an id for styling

TODO: wireframe the table and what information will go in which table location before getting started with the rendering functions
TODO: scafold the main elements of the table in HTML.
TODO:  create new function for generating hours open array based on open time and close time. Stretch goal. for now just get it working

*/
function Store(locationName, minGuestCount, maxGuestCount, avgCookiesGuest){
  // creates new store
  this.locationName = locationName;
  this.hoursOpen = ['6 am ', '7 am ', '8 am ', '9 am ', '10 am', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm ', '6 pm ', '7 pm '];
  this.minGuestCount = minGuestCount;
  this.maxGuestCount = maxGuestCount;
  this.avgCookiesGuest = avgCookiesGuest;
  this.guestPerHour = this.perHourCount();
  this.cookiesPerHour = this.ordersPerHour();
  this.expectedCookies = this.dailyTotal();

}

// Store.prototype.hoursOpen = function(){
//   // not previously coded. outputs array of the hours based on open close time. 
//   // displays with "am" and "pm" concatonation.
//   // `if-else(){}` to check if before noon or after noon. 
// }

Store.prototype.randomNumGen = function(){
  return Math.floor(Math.random() * (this.maxGuestCount-this.minGuestCount) + this.minGuestCount);
};

Store.prototype.perHourCount = function(){
  var guestThisHour = [];
  for(var guestCounts = 0; guestCounts < this.hoursOpen.length; guestCounts ++){
    var rNg = this.randomNumGen();
    guestThisHour.push(rNg);    
  }      
     return guestThisHour;
};

Store.prototype.ordersPerHour = function(){
  var cookieOrder = [];
  for(var cookieCount = 0; cookieCount < this.guestPerHour.length; cookieCount ++){
    var guestOrder = this.avgCookiesGuest * this.guestPerHour[cookieCount];
    cookieOrder.push(Math.floor(guestOrder));  
  }    
  return cookieOrder; 
  
};

Store.prototype.dailyTotal = function(){
  var orders = this.cookiesPerHour;
  var hourTotal = 0; 
  for(var orderIndex = 0; orderIndex < orders.length; orderIndex ++){
    hourTotal = hourTotal + orders[orderIndex];
  }
  return hourTotal; 
  
};

Store.prototype.renderToPage = function(){
  // renders previously generated data to table.
  // remember to call previous functions before coding any other action
  // remember to scaffold table in HTML with appropriate ID's 
  // where possible use the document methods to create elements and element attributes before outputting to page
};

var seattle = new Store('Seattle', 23, 65,6.3);
var tokyo = new Store('Tokyo', 21, 80, 13);



