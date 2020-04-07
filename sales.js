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
1. Object Raw/Fixed Data
    i. locationName for now, this is also the name of the object, may later be converted as a property and this object name changed to Store with location as seperate property as well. 
    ii. locationHrsOpen[array] [x]
    iii. minimum Customers/hr [x]
    iv. maximum Customers/hr[x]
    v. avgCookies/Customer [x]

    i1. simulated customers/hr for locationHrsOpen.length.[Array of guestCounts] [x]
         
    i2. simulated cookies per hour for avgCookies/cust * (customers
        per locationHrsOpen.length)[]
    i3. 

2. Object Methods
    i. methods for generating Dynamic data
      a.simulate customers/hr
        i1. method uses random math browser based method.
        i2. pulls properties location.minimumCust location.maxCust and location.hours.lenth.
        i3. passes minCust && maxCust into randGen 
        i4. loops step (i3) for each hrOpen.lenth.
        i5. push values generated to objectProperty: randCust/hr as array
      b. simulated cookies per hour using simulated customers/hr
        i1.pulls aveCooke/customer @ locationObject.cookies/customer
        i2.pulls hoursOpen @locationObject.hourOpen.length
        i3.pulls simCust/hr @locationObject.Cust/hr
        i4.evaluates  cust/hr*cooke/cust for ea. hrOpen
    ii. Display Results to Sales.html
        a. display: location Name
        b. display: ea hour open 
        c. display: generated TotalCookies for Each HrOpen
        d. display: total cookies for day. 



*/



var seattleStore = {
  minGuestCount : 23,
  maxGuestCount : 65,
  avgCookiesGuest : 6.3,
  
  hoursOpen : ['6am: ','7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],  // function to push time-datatypes into each index based on Open-time && Close-time???? ask about this option for later. for now, manual entry as strings will do. 

  guestPerHour : [],
  dailyGuestCount : function(minGuestCount, maxGuestCount){
    return Math.random() * (this.maxGuestCount-this.minGuestCount) + this.minGuestCount;
  },

  rNguestCount : function(guestPerHourLength){
    var arrayLength = 0;

    do{
     this.guestPerHour.push(this.dailyGuestCount[arrayLength]);
     arrayLength ++
    } while (this.guestPerHour.length < this.hoursOpen.length);
       
  },
    
  
  
  expectedCookies : [],

};

seattleStore.dailyGuestCount(seattleStore.minGuestCount, seattleStore.maxGuestCount);
seattleStore.rNguestCount(seattleStore.guestPerHour.length);
console.log('dailyGuestCount: ' + seattleStore.dailyGuestCount(this.minGuestCount,this.maxGuestCount));

//expected output array with 13 indicies containing random values

 
function updateCount(rNguestCountLength){
  // what if I use a do-while{}instead. I need dailyGuestCount to be run and updated at least once and I only need it updated for a very specific but dynamic conditon>>>>>
  for(var dailyIndex = 0; seattleStore.rNguestCount.length < seattleStore.hoursOpen.length; dailyIndex ++){
    var updateCount = seattleStore.dailyGuestCount;
    return  seattleStore.rNguestCount.push(updateCount[dailyIndex]);
  }
}


// even though this variable uses the  ` this ` keyword, since it is called into the object scope as a propertyValue, the keyword now has context to operate on. 
console.log('guestPerHour:' + seattleStore.guestPerHour);

   
