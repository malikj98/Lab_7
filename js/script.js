function init() {
//add your javascript between these two lines of code
    var ebutton = document.getElementById("entrybutton");
    function one() {
        var einput = document.getElementById("entryinput").value;
        var name = document.getElementsByTagName("h2").item(0).innerHTML;
        alert(name + ": " + einput);
        document.getElementById("textoutput").innerHTML = einput;
    }
    ebutton.addEventListener("click", one);
}
window.addEventListener('load', init);
