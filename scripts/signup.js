function signup(n, c, e, p){
    this.name=n;
    this.contact= c;
    this.email = e;
    this.pswd= p;
}

function myFun(e){
e.preventDefault()
let form = document.getElementById("form");
let name = form.name.value;
let contact = form.contact.value;
let email = form.email.value;
let pswd = form.pswd.value
var s1 = new signup(name, contact, email, pswd)
console.log(s1);

// var arr = JSON.parse(localStorage.getItem("signup")) || []
//     arr.push(s1)
// localStorage.setItem("signup", JSON.stringify(arr))
}