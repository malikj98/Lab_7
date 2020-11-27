function init(){
//add your javascrip between these two lines of code
 function js() {
   var button = document.getElementById("entrybutton");
   var input = document.getElementById("entryinput").value;
	alert("Malik Roberson: " + input);
	document.getElementById("textoutput").innerHTML = input
}
window.addEventListener('load', init);
}