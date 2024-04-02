

let invites :string[] = ['farhan','sherjeel','bilal'];

//for(let i=0; i<invites.length; i++){
   // console.log('Dr mr. ' +invites[i] + ',\n\nit is our pleasure to invite you in our party.\n\nthank you!\n\n')

//}

let absent_guest :string = 'farhan' ;

let new_guest :string = 'Rehan';

invites[0] = new_guest ;

for(let i=0; i<invites.length; i++){

    console.log('dear mr. ' +invites[i] + ',\n\nit is our pleasure to invite you in our paety.\n\nthank you!\n\n')
}

console.log(`MR. ${absent_guest} is not coming to yhe party.`)

console.log('good news! we find big table so we are inviting 3 more guests.')

invites.unshift('amanullah') ;

invites.splice(2 , 0 , 'ali');

invites.push('muzamil mughal');


for(let i=0; i<invites.length; i++){

    console.log('dear mr. ' +invites[i] + ',\n\nit is our pleasure to invite you in our paety.\n\nthank you!\n\n')

    }