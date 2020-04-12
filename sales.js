'use strict';
console.log('hello, I work');
// seperate each object with  ` ==== Object Name ======= ` 

//==========      SeatleStore Object      ==============
var seattleStore = {
  locationName : 'Seattle',
  minGuestCount : 23,
  maxGuestCount : 65,
  avgCookiesGuest : 6.3,
  hoursOpen : ['6 am ', '7 am ', '8 am ', '9 am ', '10 am', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm ', '6 pm ', '7 pm '], 
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
// =========== Print To Sales.Html page display data =====
seattleStore.renderToPage = function(){
  var newStoreEl = document.getElementById('seattle');
  console.log(newStoreEl);
  var newText = this.locationName;
  console.log(newText);
  newStoreEl.textContent = newText;
  console.log(newStoreEl);
  //Display hours open for each hour
  for(var i = 0; i < this.hoursOpen.length; i++){
    var newTrackerEl = document.getElementById('seattle-hours-open');
    var newHourEl = document.createElement('li');
    var HrNewContent = this.hoursOpen[i]; 
    newHourEl.textContent = HrNewContent;
    newTrackerEl.appendChild(newHourEl)
  }
  //Display cookies per Hour
  for( i = 0; i < this.hoursOpen.length; i++){
    var newCookieEl = document.getElementById('seattle-cookie-per-hour');
    var newContentEl = document.createElement('li');
    var getCookieArray = this.cookieHour();
    var cookieTextContent = getCookieArray[i];
    newContentEl.textContent = cookieTextContent;
    newCookieEl.appendChild(newContentEl);
    
  }
};



seattleStore.renderToPage();








