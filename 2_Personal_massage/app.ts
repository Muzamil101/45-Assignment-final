let personname :string = '';

personname = prompt('what is your name?') || '';

if(personname !== null && personname !== ''){
    alert('hello ${personname},would you like to learn some paython today?')
}
else{
    alert('you have is fill your name !')
}