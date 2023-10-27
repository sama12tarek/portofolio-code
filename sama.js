let userName=document.querySelector('#userName');
let password=document.querySelector('#password');
 let emailAddress=document.querySelector('#emailAddress');
let sendMessage=document.querySelector('#sendMessage');
 let getuserName=localStorage.getItem('userName');
 let getpassword=localStorage.getItem('password');

 sendMessage.addEventListener('click',function(p) {

 p.pereventDefault();
 if(userName.value.trim()==="" || password.value ==="") {
 alert("please fill data")

 }
else{
    if(getuserName&&getuserName.trim()===userName.value.trim()&&getpassword && getpassword.trim()===password.value.trim())
    {
         setTimeout(()=>{
         Window.location="index.html"

         },100)
 }

 else{
 alert("userName or password is incorrect")
 }
 }

 })