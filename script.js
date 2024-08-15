//your JS code here. If required.
document.getElementById("fname").addEventListner("blur", function() {
	this.value = this.value.toUpperCase();
})