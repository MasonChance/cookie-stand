'use strict';

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
    i. locationName
    ii. locationHrsOpen[]
    iii. minimum Customers/hr
    iv. maximum Customers/hr
    v. avgCookies/Customer

    i1. simulated customers/hr for locationHrsOpen.length.[] using
        objects/math/random number generator. 
    i2. simulated cookies per hour for avCookies/cust * (customers
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
  minGuestCount : '23',
  maxGuestCount : '65',
  avgCookiesGuest : '6.3',
  hoursOpen : [],  // function to push time-datatypes into each index based on Open-time && Close-time????

}