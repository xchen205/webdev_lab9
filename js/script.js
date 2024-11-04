window.addEventListener("load", init);

function init(){
//add your javascrip between these two lines of code
  var textEntry=document.getElementById("entryinput").value;
  window.alert("Xing Chen: "+textEntry);
  document.getElementById("textoutput").innerHTML=textEntry;
}
