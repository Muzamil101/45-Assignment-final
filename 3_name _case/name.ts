let personnname : string = '';

personnname = prompt('what is your name?') || '';

let lowercase :string = personnname.toLowerCase() ;
let uppercase :string = personnname.toUpperCase() ;
let titlecase :string = personnname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if(personnname !== null && personnname !== ''){
    alert(`Hello ${personnname},Here are your name in:
    lowercase: ${lowercase}
    uppercase: ${uppercase}
    titlecase: ${titlecase}`)
}