function init() {
//add your javascrip between these two lines of code
  document.getElementById("entrybutton").addEventListener("click", lab);
  function lab() {
    var button = document.getElementById("entrybutton");
    var input = document.getElementById("entryinput").value;
      alert(" Malik Roberson: " + input);
      document.getElementById("textoutput").innerHTML = input;
  }
window.addEventListener('load', init);
}
