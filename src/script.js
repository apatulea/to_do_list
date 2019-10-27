//create button
let buttonRight = "<button type='button' class='inButton' id='btn'>&#8594</button>"
let recicle = "<span id='delete'>&#9746</span>";

let idNo=0;

function newTask(){
  let getInput = $("#user_input").val(); // global variable, to be used outside the function

  if(getInput.trim().length == 0){  //check if the textarea is empty
    alert("PLEASE ADD A TASK");
  }
  else{
  addInput = $("#follow_up").append("<li class='newTask checked' id='in'> " + recicle + " " + getInput + "   " + buttonRight + "</li>").hide().fadeIn(1000);

  $("#in").attr("id",idNo); // numbering , adding the id's
  idNo = idNo + 1;
  }
}
$("#task_button").on("click",newTask);

function moveToDaily(){
  let targetId = $(this).parent().attr("id"); // get the button parent id
  let fullElement = $("#" + targetId).text(); 
  let string = fullElement.slice(2,-1); // delete the last characters (arrow and delete buttons)
  $("#daily_task").append("<li class='checked'>" + string + "</li>");//
}
//using on function , structure as below: 
//needed to bind dinamically created elements  :  (element selector comes in the function)
$("body").on("click","li button", moveToDaily);

$("body").on("click","#delete", function(){
  $(this).parent().remove();
})

function addCrossed(){
 let elClass = $(this).attr("class", "crossed");
  elClass.fadeOut(1500, function(){   
    $(this).remove();   //remove() must come as fadeOut argument otherwise the el will be removed without fadeOut effect
    })
}

$("body").on("click", "#daily_task li", addCrossed);

//Customise the title letters one by one :
let textItem1 = $(".item1").text();   //get the text
let arrayText = textItem1.split("");  //split the text into array of characters 
//console.log(arrayText);

//build a string of characters wrapped in tags with id's
let stringTagged ="";
for(i=0; i<arrayText.length; i++){
  stringTagged += "<span class=" + i + ">" + arrayText[i] + "</span>";
  //console.log(stringTagged);
}

$(".item1").html(stringTagged); //replace the initial string with the new one with id's*/

let colors =["#052F5F","#009DDC","#F7B801","#8EA604","#F4442E"]

for (i=0; i<stringTagged.length; i++){
  $("."+i).css("color", colors[Math.floor(Math.random()*colors.length)]);
}



