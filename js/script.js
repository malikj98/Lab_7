function init(){
//add your javascript between these two lines of code
 var button = document.getElementById("entrybutton")
 function js() {
   var input = document.getElementById("entryinput").value;
   var name = document.getElementsByTagName("h2").item(0).innerHTML;
   alert(name + ": " + input);
   document.getElementById("textoutput").innerHTML = input
}
button.addEventListener("click", one);
}
window.addEventListener('load', init);
