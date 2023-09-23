// alert("login successfull");
let allbtn2=document.querySelectorAll(".box");
for(btn of allbtn2){
    btn.addEventListener("click",btnpress);
}
function btnpress(){
    let btn=this;
    let id=btn.getAttribute("id");
    let a=document.querySelectorAll('a');

    for(at of a){
        at.addEventListener("click",btn2press
        )
    }
    function btn2press(){
        let btns=this;
    if(id=="physics"){
        btns.setAttribute("href","content.html")
          }
    if(id=="chem"){
        btns.setAttribute("href","chem.html")
    }
    if(id=="maths"){
        btns.setAttribute("href","math.html")
    }
    
}}
