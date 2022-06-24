var buttons=document.querySelectorAll(".button")
console.log(buttons);
var display=document.getElementById("blank-cont");
var operand1=0;
var operand2=null;
var operator=null;


for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(event){
        var value= this.getAttribute("data-value");
        console.log(value);
        if(value=="+"){
            operator="+"
            operand1=parseFloat(display.textContent);
            
            display.innerHTML=""

        }
        else if(value=="-"){
            operator="-"
            operand1=parseFloat(display.textContent);
            display.innerHTML=""
            

        }
        else if(value=="*"){
            operator="*"
            operand1=parseFloat(display.textContent);
            display.innerHTML=""

        }
        else if(value=="/"){
            operator="/"
            operand1=parseFloat(display.textContent);
            display.innerHTML=""

        }
        else if(value=="AC"){
            display.innerHTML="";

        }
        

        else if(value=="="){
            operand2=parseFloat(display.textContent)
            display.innerHTML=eval(operand1 + operator +operand2);
            
            

        }
        else{
            display.innerHTML +=value;
        }
        console.log(event.target)


    })
}
