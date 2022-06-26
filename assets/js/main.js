// *** Write your code here***
let displayResult = document.getElementById("displayResult")

function display(number){
  displayResult.value +=number
}

function compute(){
  try{

    displayResult.value = eval(displayResult.value)
  }
  catch(err) 
  {
    alert("error")
  }
  
}
function Clear(){
  displayResult.value = null
 
}
function DELETE(){
  displayResult.value =  displayResult.value.slice(0,-1)
}