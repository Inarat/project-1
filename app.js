
function changeColor(){
    var ele = document.getElementById("#");
    ele.style.textDecoration = "underline";
    ele.style.color="yellow"
}

// let ele = document.getElementById("def")
// ele.addEventListener("mouseover", changeColor());


  // The following code was adapted slightly from https://html.com/attributes/a-target/#ixzz7PrDWne4K because target="_blank" was not working and I needed external links to open in new window.
function openLinksNewTab() {
  for(var links = document.getElementsByTagName("a"), a = 0;a < links.length;a++) {
     var b = links[a]; b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank") 
    } 
  }  openLinksNewTab();



// For the below function to work LiveServer with VSCode would be needed. 
// Ajax function to change the content of the paragraph with another text. The file cake.txt is an HTML code and gets executed once called.

function loadRecipe(){
const xhttp = new XMLHttpRequest();

xhttp.onload = function() {
  recipe = this.responseText;
   var originalHtml = $('#recipe-par').html();
  document.getElementById("recipe-par").innerHTML = recipe;

}
// Send a request
xhttp.open("GET", "cake.txt");
xhttp.send();
}
  
// Demonstration of interactivity of JS . Idea is taken from one of my favourite articles. Source: https://waitbutwhy.com/2014/05/life-weeks.html.
//Given the age, this function dynamically calculates the number of remaining weeks and months if one was to live up to 90 years. Response color changes based on input. 
function yourLifeinWeeksCalculator(){
  var your_current_age = document.getElementById("age").value;
  var max_year=90;
  var weeks = "";
  var months = "";
  calculated_result = document.getElementById("calc_result");
  
  
if(Number.isNaN(your_current_age)|| your_current_age==0){  //Validate the input: input value should not be empty  or equal to 0. 
calculated_result.innerHTML="Please enter valid integer";
calculated_result.style.color="red";  
       }
else{
  if (your_current_age>=90){
    calculated_result.innerHTML ="Congratulations, you are a <strong>long-liver!</strong>";
    calculated_result.style.color="orange";}
  else{
 weeks = (max_year-your_current_age)*52;
 months = (max_year-your_current_age)*12;
  calculated_result.innerHTML="Your have "+weeks+" weeks and "+ months+ " months left.&nbsp; Make the most out of them."; 
calculated_result.style.color="green";
}

}
}


