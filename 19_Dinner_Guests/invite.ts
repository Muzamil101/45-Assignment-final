

let invites :string[] = ['farhan','sherjeel','bilal'];

//for(let i=0; i<invites.length; i++){
   // console.log('Dr mr. ' +invites[i] + ',\n\nit is our pleasure to invite you in our party.\n\nthank you!\n\n')

//}

let absent_guest :string = 'farhan' ;

let new_guest :string = 'Rehan';

invites[0] = new_guest ;

//for(let i=0; i<invites.length; i++){

   // console.log('dear mr. ' +invites[i] + ',\n\nit is our pleasure to invite you in our paety.\n\nthank you!\n\n')
//}

// console.log(`MR. ${absent_guest} is not coming to yhe party.`)

// console.log('good news! we find big table so we are inviting 3 more guests.')
 
// array 3 guest add kiya ha .
invites.unshift('amanullah') ;

invites.splice(2 , 0 , 'ali');

invites.push('muzamil mughal');

// yaha per mana 6 guest ke array ko print kiya ha..


//sorry massage to guest noy inviting.
   // console.log('\nsorry we can arrange big table, only two peoples will be invited. ')

    //yaha pr nmana guest remove kiya hain.
    while(invites.length > 2){
      let remove_guest =  invites.pop();
   //    console.log(`sorry mr. ${remove_guest}, you are not invited for dinner.`);
   }
  // mara bacha howa 2 invited guest.  
//  for(let i=0; i<invites.length; i++){

//  console.log('dear mr. ' +invites[i] + ',\n\nyou are still invited.\n\nthank you!\n\n')
//  }
// mene sare guest array sa remove kar diya .
 invites.splice(0, 2);
 console.log(invites);

 //exercise no; 19
console.log (`total numbwe of guest are: ${invites.length}`);