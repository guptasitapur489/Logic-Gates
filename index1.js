import {arr} from "sample.js";
function check(){
    var usernam = "abcxyz";
    var pwd = "xyzabc";
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username);
    console.log(password);
    if(password == pwd && usernam == username){
    alert ("Login successfully");
    window.location = index3.html;
    }
    else{
    alert (password);
    }
}