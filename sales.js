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

/*
    ii. Display Results to Sales.html
        a. display: location Name
        b. display: ea hour open 
        c. display: generated TotalCookies for Each HrOpen
        d. display: total cookies for day. 



*/

//==========SeatleStore Object ==============
var seattleStore = {
  locationName : 'Seattle',
  minGuestCount : 23,
  maxGuestCount : 65,
  avgCookiesGuest : 6.3,
  
  hoursOpen : ['6am: ','7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],  // function to push time-datatypes into each index based on Open-time && Close-time???? ask about this option for later. for now, manual entry as strings will do. 
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

// //Display Store Name in <h3>element 
// seattleStore.renderToPage = function(){
//   // give DOM a target ID
//   var newEl = document.getElementById('locationName');
//   var newTextCont = newEl.createTextNode(seattleStore.locationName);
//   newEl.appendChild(newTextCont);

  
// };
// seattleStore.renderToPage();
// console.log(newEl);
// console.log(newText);
// console.log(newTextCont);
// // create Content (textcontent)
// // add content to page. 
// //


//============ Try as first Item appended to list====
seattleStore.renderToPage = function(){
//get target
var targetSeatEl = document.getElementById('storeName');
//create content
var seatElNewLi = document.createElement('li');
var seatContName = seattleStore.locationName;
seatElNewLi.textContent = seatContName;
console.log('seatElNewLi: ' + seatElNewLi);
// append to target

targetSeatEl.appendChild(seatElNewLi);
}
seattleStore.renderToPage();





   
