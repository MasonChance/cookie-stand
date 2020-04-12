'use strict';
console.log('hello, I work');

/* EXTRACT THE LITERALS INTO CONSTRUCTORS

TODO: create stand alone function to create table footergive it a class and an id for styling

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
  this.renderStoreTableHeader = this.renderStoreTableHeader();
  this.renderToPage = this.renderToPage();
  this.renderTableFooter = this.renderTableFooter();

}

  // TODO: Store.prototype.hoursOpen = function(){
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

  //===== The Table Header is Independent of the Store Data Rendering Function ====//

Store.prototype.renderStoreTableHeader = function(){

  if(document.getElementById('operation-hours' ) === null){
    var headerTargetRow = document.getElementById('overview');
    var newHeaderRowEl = document.createElement('tr');
    newHeaderRowEl.id = 'operation-hours';
    headerTargetRow.appendChild(newHeaderRowEl);
    var operationThElTarget = document.getElementById('operation-hours');
    var newThEl = document.createElement('th');
    operationThElTarget.appendChild(newThEl);
    
    for(var i = 0; i < this.hoursOpen.length; i++){
      var hoursOpenThEl = document.createElement('th');
      var newHrOpenContent = this.hoursOpen[i];
      hoursOpenThEl.textContent = newHrOpenContent;
      operationThElTarget.appendChild(hoursOpenThEl);
    }
    var newHeaderTotalEl = document.createElement('th');
    var newHeaderTotalContent = 'Total Daily Cookies';
    newHeaderTotalEl.textContent = newHeaderTotalContent;
    operationThElTarget.appendChild(newHeaderTotalEl);
  }
  
};

Store.prototype.renderToPage = function(){
  //segment creates new row with id and appends to the table with the locationName in a <th> that is the first child of the row

  var tRowTargetEl = document.getElementById('overview');
  var newRowEl = document.createElement('tr');
  newRowEl.id = this.locationName;
  newRowEl.textContent + this.locationName;
  tRowTargetEl.appendChild(newRowEl);
  
  // creates new <td> elements at the row#this.location name. fills with content = this.cookiesPerHour[i]
  var tHeaderTargetEl = document.getElementById(this.locationName);
  var newThEl = document.createElement('th');
  var newThContent = this.locationName;
  newThEl.textContent = newThContent;
  tHeaderTargetEl.appendChild(newThEl);
    
  for(var i = 0; i < this.hoursOpen.length; i++){
    var tDataTargetEl = document.getElementById(this.locationName);
    var newTdEl = document.createElement('td');
    var newTdContent = this.cookiesPerHour[i];
    
    newTdEl.textContent = newTdContent;
    tDataTargetEl.appendChild(newTdEl);   
  }

  var newTotalEl = document.createElement('td');
  var newTotalContent = this.expectedCookies;
  newTotalEl.textContent = newTotalContent;
  tDataTargetEl.appendChild(newTotalEl);

};

Store.prototype.removeFinalRow = function(){
  var clear = document.getElementById('tSummary');
  clear.remove();
};

Store.prototype.renderTableFooter = function(){
  if(document.getElementById('tSummary') != null){
  //Creates new row with Id 'tSummary' removing the last instance of renderTableFooter.
    this.removeFinalRow();
    this.writeRow();      
  } else {
    this.writeRow();  
  }
};

Store.prototype.writeRow = function(){
  var tableFooterTargetEl = document.getElementById('overview');
  var newTableFooterEl  = document.createElement('tr');
  newTableFooterEl.id = 'tSummary';
  tableFooterTargetEl.appendChild(newTableFooterEl);
  //Creates first Footer Cell with <th> subsequent cells must also be <th>
  var newFooThElTarget = document.getElementById('tSummary');
  var newFoothEl = document.createElement('th');
  var newThElContent = 'Hourly totals across all locations';
  newFoothEl.textContent = newThElContent;
  newFooThElTarget.appendChild(newFoothEl);
    // Find Target. if table is object <tr> is array index, and <th>/<td> are arrays of row;
    //Syntax for looping through the td/th children of a <tr>: 
  
};

// ==== seperate functions for 
// 1. retrieving values in each first child of tr with tag <td> 
    //1.a. iterate and push to array, 
    //1.b. sum array. 
    //1.c. write return of (1.b.) to tableFooterRow[i]
// 2. interate step above through loop = to tableHeaderRow.length. 






//==== Create Store Objects Here ====//
var seattle = new Store('Seattle', 23, 65,6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);







