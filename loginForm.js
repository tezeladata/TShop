// Login Form
function siteUsers(name, surname, age, email, password){
    this.name=name
    this.surname=surname
    this.age=age
    this.email=email
    this.password=password
}
document.getElementById("submit").onclick=function(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user1=new siteUsers(name, surname, age, email, password);
    if (user1.name=="" || user1.surname=="" || user1.age=="" || user1.email=="" || user1.email==""){
        alert("Not enough data")
    } else{
        document.getElementById("span1").innerHTML=user1.name;
        document.getElementById("span2").innerHTML=user1.surname;
        document.getElementById("span3").innerHTML=user1.age;
        document.getElementById("span4").innerHTML=user1.email;
        let userPassword="";
        for (let i=0; i<password.length; i++){
        userPassword+="."
        }
        document.getElementById("span5").innerHTML=userPassword;

        document.querySelector('.account-form-answers').style.display = 'flex';

        setTimeout(function() {
        location.reload();
        }, 2500);
    }
}

// Header
const body=document.querySelector("body");
const navbar=document.querySelector(".navbar");
const menu=document.querySelector(".menu-list");
const menuBtn=document.querySelector(".menu-btn");
const cancelBtn=document.querySelector(".cancel-btn");
menuBtn.onclick=()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    body.classList.add("disabledScroll");
}
cancelBtn.onclick =()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    body.classList.remove("disabledScroll");
}
window.onscroll =()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}