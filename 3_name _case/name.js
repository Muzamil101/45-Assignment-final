var personnname = '';
personnname = prompt('what is your name?') || '';
var lowercase = personnname.toLowerCase();
var uppercase = personnname.toUpperCase();
var titlecase = personnname.split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(' ');
if (personnname !== null && personnname !== '') {
    alert("Hello ".concat(personnname, ",Here are your name in:\n    lowercase: ").concat(lowercase, "\n    uppercase: ").concat(uppercase, "\n    titlecase: ").concat(titlecase));
}
