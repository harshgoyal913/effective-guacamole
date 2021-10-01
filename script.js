let buttons  = document.querySelectorAll(".grid-item");
let result_section = document.querySelector(".result");

for(let i = 0 ; i<buttons.length;i++){

    buttons[i].addEventListener("click",function(){
        if(result_section.innerHTML=="0"){
            result_section.innerHTML="";

        }

        if(buttons[i].innerHTML=="AC"){
            result_section.innerHTML="0";
            return;
        }
        if(buttons[i].innerHTML!="AC"){
            let temporary_input = buttons[i].textContent;
            result_section.innerHTML=result_section.innerHTML+temporary_input;
        }
    
       

    });
}