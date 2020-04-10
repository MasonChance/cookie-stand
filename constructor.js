'use strict';
console.log('hello, I work');

/* EXTRACT THE LITERALS INTO CONSTRUCTORS
TODO: create the methods using prototype
        1. remember this
        2. remember that some functions rely on others and be sure to call them with (); before doing anything else with the method. 
        3. be cognizant of which data is dynamic. 
TODO: create stand alone function  to create table header give it a class and an id for styling
TODO: create stand alone function to create table footergive it a class and an id for styling
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

// Store.prototype.renderToPage = function(){
//   //Target Table id 'overview'
//   var tRowTargetEl = document.getElementById('overview');
//     // Create <tr> then give it an ID = this.locationName
//   var newRowEl = document.createElement('tr');
//   newRowEl.id = this.locationName;
//   // Append to <table#overview> 
//   tRowTargetEl.appendChild(newRowEl);
//   //Target <tr#this.locationName>
//   var tHeaderTargetEl = document.getElementById(this.locationName);
//   //Create <th> (no # needed)
//   var newThEl = document.createElement('th');
//   //create content: location name is first cell. 
//   var newThContent = this.locationName;
//   newThEl.textContent = newThContent;
//   tHeaderTargetEl.appendChild(newThEl);
//     // next peice gets for(){}. this.hoursOpen.length
    
//     // for(var i = 0; i < this.hoursOpen.length; i++){
//     //   var tDataTargetEl = document.getElementById(this.locationName);
//     // // target <tr#this.locationName>
//     // // Create Content
//     // // new <td>
//     // var newTdEl = document.createElement('td');
//     // // newContent this.cookiesPerHour[i]
//     // var newTdContent = this.cookiesPerHour[i];
//     // // assign new content<td.textContent>
//     // newTdEl.textContent = newTdContent;
//     // //append to target tr#this.locationName.
//     // tDataTargetEl.appendChild(newTdEl);
//   // }

  
//   console.log('newThContent : ' + newThContent);
//   console.log('newThEl.textContent: ' + newThEl.textContent);
//   console.log('newRowElId: ' + newRowEl.id);
// };


// var seattle = new Store('Seattle', 23, 65,6.3);

// seattle.renderToPage();
//========== consolelogs for Rendertopage =====



