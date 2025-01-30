//your JS code here. If required.
function capitalName(){
	var inputfield = document.getElementById("fname");
	inputfield.value = inputfield.value.toUpperCase();
}
document.getElementById("fname").addEventListener("input", capitalName);