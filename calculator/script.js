let display = document.getElementById("display");
let string = "";
let ans = "";
let buttons = document.querySelectorAll("button"); //To select all buttons.
let arrayOfBtn = Array.from(buttons); // Take all buttons in an array to loop over this.
arrayOfBtn.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerText == "=") {
            if(string == "") return;
            try {
              string = eval(string); // To calculate
              display.value = string;
              ans = string; // To store the final answer in a variable.
            } catch (error) {
                display.value = "Syntax ERROR";
            }
            
        }
        else if(e.target.id == "ops"){
            if (
              string == "") return; // Return from displaying the operators if there has no variable to calculate.
            string += e.target.innerText;
            display.value = string;
        }
        else if(e.target.innerText == "Ans"){
            string += String(ans);
            display.value = string;
        }
        else if (e.target.innerText == "AC") {
            string = "";
            display.value = string;
        }
        else if(e.target.innerText == "DEL"){
            string = string.substring(0,(string.length-1)); // To delete the last digit or operators.
            display.value = string;
        }
        else{
            string += e.target.innerText;
            display.value = string;
        }
    })
})