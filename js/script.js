function init(){
//add your javascrip between these two lines of code
  var textEntry=document.getElementById("entryinput").innerHTML;
  window.alert("Xing Chen: "+textEntry);
  window.addEventListener("load", init);
  document.getElementById("textoutput").innerHTML=textEntry;
}
