function init(){
//add your javascript between these two lines of code
 document.getElementById("entrybutton").addEventListener("click", js);
 function js() {
   var input = document.getElementById("entryinput").value;
   var name = document.getElementsByTagName("h2").item(0).innerHTML;
	alert(name + ": " + input);
	document.getElementById("textoutput").innerHTML = input
}
window.addEventListener('load', init);
}