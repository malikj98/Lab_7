function init() {
//add your javascript between these two lines of code
    var enbutton = document.getElementById("entrybutton");
    function one() {
        var eninput = document.getElementById("entryinput").value;
        var name = document.getElementsByTagName("h2").item(0).innerHTML;
        alert(name + ": " + eninput);
        document.getElementById("textoutput").innerHTML = eninput;
    }
    enbutton.addEventListener("click", one);
}
window.addEventListener('load', init);
