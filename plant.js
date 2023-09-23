let url=("plant.json");
async function data(){
    let response=await fetch(url);
    const dat=await response.json();
   
}
data();
let sub=document.querySelector("#submit");
let form=document.querySelector("#form")
let pass=document.querySelector("#lpass")
let mail=document.querySelector("#gmail");

sub.addEventListener("click",()=>{
    

if(pass.value=="@123" && mail.value=="abc@gmail.com"){
    sub.addEventListener("click",()=>{
        alert("login successful")
    });
    }else{
        form.removeAttribute("action");
        alert("wrong password or gmail,try again")
       }
    })
let allbtns=document.querySelectorAll(".box");
for(btn of allbtns){
    btn.addEventListener("click",()=>{
        alert("Login for cont")
    });
}

    
