// 41. Magicians: 
// Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
// prints the name of each magician in the array
let Magician : string[] = ['harry potter','hermione granger','ron waslay','albus dumledore'];

function show_magicians(magicians: string[]) {
    magicians.forEach(element => {
        console.log(element);
        
    });

}

show_magicians(Magician);