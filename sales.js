'use strict';
console.log('hello, I work');
// seperate each object with  ` ==== Object Name ======= ` 
/* 
1. Outline All major steps
    A. All Objects/Object template
      i. all related object properties
      ii. all object related methods
    B. Tasks to be Completed
      i. Categorize by scope,
        a.global
        b.object specific
        c.relates to sales.html
        d. relates to index.html
        c. relates to style.css/page layout/structure.
      ii. Categorize individual tasks in terms of ManBearPig format or Outside-in structuring and workflow
*/


//=================Global Scope (structure and tasks)================

//==========SeatleStore Object ==============
var seattleStore = {
  locationName : 'Seattle',
  minGuestCount : 23,
  maxGuestCount : 65,
  avgCookiesGuest : 6.3,
  
  hoursOpen : [600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900],  // function to push time-datatypes into each index based on Open-time && Close-time???? ask about this option for later. for now, manual entry as strings will do. 
  guestPerHour : [],

  expectedCookies : [],
  
};

// ========== Seattle Store Methods  and assigned variables. ================

// Generates a random number of guests for each hourOpen
seattleStore.randNumGen = function(){
  return Math.floor(Math.random() * (this.maxGuestCount-this.minGuestCount) + this.minGuestCount);
}

// gets number of guests per hour for each hourOpen
seattleStore.perHourCount = function(){
  for(var guestCounts = 0; guestCounts < this.hoursOpen.length; guestCounts ++){
    var rNg = seattleStore.randNumGen();
    this.guestPerHour.push(rNg);
    
  }  
    
     return this.guestPerHour 
}
// ======= Cookies Per Hour assigned variables========

// gets number of cookies * number of guests for each hour
seattleStore.cookieHour = function(){
  var cookieOrder = seattleStore.perHourCount();

  for(var cookieCount = 0; cookieCount < this.guestPerHour.length; cookieCount ++){
    var guestOrder = this.avgCookiesGuest * cookieOrder[cookieCount];
    this.expectedCookies.push(Math.round(guestOrder));
  
  }  
  return this.expectedCookies;  
}
// ======= total daily cookies ============

seattleStore.DailyTotal = function(){
  var orders = this.cookieHour();
  var hourTotal = 0;
 
  for(var orderIndex = 0; orderIndex < orders.length; orderIndex ++){
    hourTotal = hourTotal + orders[orderIndex];
  }
  return hourTotal;
} 
// =========== Print To Sales.Html page display data =======

seattleStore.renderToPage = function(){
  //Display Store Name in <h3>element 
  // give DOM a target ID
  var newStoreEl = document.getElementById('locationName');
  //create the content
  console.log(newStoreEl);
  var newText = this.locationName;
  console.log(newText);
  //append to page
  newStoreEl.textContent = newText;
  console.log(newStoreEl);

  //Display hours open for each hour
  // give DOM a target

  for(var i = 0; i < this.hoursOpen.length; i++){
    var newTrackerEl = document.getElementById('hours-open');
    var newHourEl = document.createElement('li');
    var HrNewContent = this.hoursOpen[i]; 
    newHourEl.textContent = HrNewContent;
    newTrackerEl.appendChild(newHourEl)
  }
  
  //Display cookies per Hour
  
  // give DOM Target
  for( i = 0; i < this.hoursOpen.length; i++){
    var newCookieEl = document.getElementById('cookie-per-hour');
  // create Content
  // // list Item
  var newContentEl = document.createElement('li');
  // // cookies for that hour
  var getCookieArray = this.cookieHour();
  var cookieTextContent = getCookieArray[i];
  newContentEl.textContent = cookieTextContent;
  // append to target
  newCookieEl.appendChild(newContentEl)
  }

  console.log('newCookieEl: ' + newCookieEl);
  console.log('newContentEl: ' + newContentEl);
  console.log('cookieTextContent: ' + cookieTextContent);

};
seattleStore.renderToPage();








   
