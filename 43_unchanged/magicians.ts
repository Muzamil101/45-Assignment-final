// 43. Unchanged Magicians: 
// Start with your work from Exercise 40. Call the function make_great() with a copy of the array 
// of magicians’ names. Because the original array will be unchanged, return the new array and store it 
// in a separate array. Call show_magicians() with each array to show that you have one array of the 
// original names and one array with the Great added to each magician’s name.


let Magician : string[] = ['harry potter','hermione granger','ron waslay','albus dumledore'];

function copyArray(magicianArry: string[]) {
   return [...magicianArry]
}


function make_great(magicianArry: string[]) {
    for(let i=0; i<magicianArry.length; i++){
        magicianArry[i] = 'the great ' +  magicianArry[i] ;
    }

}

function show_magicians(magicians: string[]) {
    magicians.forEach(element => {
        console.log(element);
        
    });

}

const copymagicianArry = copyArray(Magician);
make_great(copymagicianArry);

console.log('\n\nthis is my orignal array')
show_magicians(Magician);

console.log('\n\nthis is my modfied copy of the array:')
show_magicians(copymagicianArry);