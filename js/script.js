function init(){
//add your javascrip between these two lines of code
 function js() {
   var button = document.getElementById("entrybutton");
   var input = document.getElementById("entryinput").value;
   var name = document.getElementsByTagName("h2").item(0).innerHTML;
	alert(name + ": " + input);
	document.getElementById("textoutput").innerHTML = input
}
button.addEventListener("click", js);
window.addEventListener('load', init);
}