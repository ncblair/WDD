$(document).ready(function(){
	$(".time").click(function(){
	    console.log($(this).text());
		if ($(this).hasClass("goodInputButt")){
			$(this).removeClass("goodInputButt");
			$(".hiddenTime").val("");
		}
		else{
			$(".time").removeClass("goodInputButt");
			$(this).addClass("goodInputButt");
			$(".hiddenTime").val($(this).text());
		}
		if ($(this).hasClass("goodInput")){
			$(this).removeClass("goodInput");
		}
		else{
			$(".time").removeClass("goodInput");
			$(this).addClass("goodInput");
		}
		console.log("hello");
	});
	$(".color").click(function(){
		console.log("gucci");
		if ($(this).hasClass("goodInputButt")){
			$(this).removeClass("goodInputButt");
			$(".hiddenColor").val("");
		}
		else{
			$(".color").removeClass("goodInputButt");
			$(this).addClass("goodInputButt");
			$(".hiddenColor").val($(this).css("background-color"));
		}
		if ($(".hiddenColor").val() === "rgb(0, 0, 128)"){
		    $(".hiddenColor").val("blue");
		}
		else if ($(".hiddenColor").val() === "rgb(255, 255, 255)"){
		    $(".hiddenColor").val("white");
		}
		else if ($(".hiddenColor").val() === "rgb(255, 192, 203)"){
		    $(".hiddenColor").val("pink");
		}
		console.log("hello");
	});
});

function onChange(elem) {
	console.log(elem.value);
	if (elem.classList[0] === "name") {
		console.log("world");
		elem.value = elem.value.trim();
		if (/^([A-Za-z]+ *(  *[A-Za-z]+){0,1})$/.test(elem.value)) {
			if (containsClassName(elem, "badInput")) {
				elem.classList.remove("badInput");
			}
			console.log("hello");
			elem.className += " goodInput";
		}
		else {
			if (containsClassName(elem, "goodInput")) {
				elem.classList.remove("goodInput");
			}
			elem.className += " badInput"
		}
	}
	if (elem.classList[0] === "mobile") {
		elem.value = elem.value.trim();
		if (/^([0-9]*\-*\(*[0-9]{3}\)*\-*[0-9]{3}\-*[0-9]{4})$/.test(elem.value)) {
			if (containsClassName(elem, "badInput")) {
				elem.classList.remove("badInput");
			}
			elem.className += " goodInput";
		}
		else {
			if (containsClassName(elem, "goodInput")) {
				elem.classList.remove("goodInput");
			}
			elem.className += " badInput"
		}
	}
	if (elem.classList[0] === "address1") {
		elem.value = elem.value.trim();
		if (/^([A-Za-z0-9 ,\.]+)$/.test(elem.value)) {
			if (containsClassName(elem, "badInput")) {
				elem.classList.remove("badInput");
			}
			elem.className += " goodInput";
		}
		else {
			if (containsClassName(elem, "goodInput")) {
				elem.classList.remove("goodInput");
			}
			elem.className += " badInput"
		}
	}
	if (elem.classList[0] === "address2") {
		elem.value = elem.value.trim();
		if (/^([A-Za-z0-9 ,\.]+)$/.test(elem.value)) {
			if (containsClassName(elem, "badInput")) {
				elem.classList.remove("badInput");
			}
			elem.className += " goodInput";
		}
		else {
			if (containsClassName(elem, "goodInput")) {
				elem.classList.remove("goodInput");
			}
		}
	}
	if (elem.classList[0] === "city") {
		elem.value = elem.value.trim();
		if (/^([A-Za-z ]+)$/.test(elem.value)) {
			if (containsClassName(elem, "badInput")) {
				elem.classList.remove("badInput");
			}
			elem.className += " goodInput";
		}
		else {
			if (containsClassName(elem, "goodInput")) {
				elem.classList.remove("goodInput");
			}
			elem.className += " badInput"
		}
	}
	if (elem.classList[0] === "state") {
		elem.value = elem.value.trim();
		if (/^([A-Za-z]+)$/.test(elem.value)) {
			if (containsClassName(elem, "badInput")) {
				elem.classList.remove("badInput");
			}
			elem.className += " goodInput";
		}
		else {
			if (containsClassName(elem, "goodInput")) {
				elem.classList.remove("goodInput");
			}
			elem.className += " badInput"
		}
	}
	if (elem.classList[0] === "college") {
		elem.value = elem.value.trim();
		console.log(elem.value);
		if (/^([A-Za-z 0-9\-]+)$/.test(elem.value)) {
			if (containsClassName(elem, "badInput")) {
				elem.classList.remove("badInput");
			}
			elem.className += " goodInput";
		}
		else {
			if (containsClassName(elem, "goodInput")) {
				elem.classList.remove("goodInput");
			}
			elem.className += " badInput"
		}
		if ($(elem)[0].selectedIndex <= 0){
		    if (containsClassName(elem, "goodInput")) {
				elem.classList.remove("goodInput");
			}
			elem.className += " badInput"
		}
	}
	if (elem.classList[0] === "building") {
		elem.value = elem.value.trim();
		console.log(elem.value);
		if (/^([A-Za-z 0-9\_]+)$/.test(elem.value)) {
			if (containsClassName(elem, "badInput")) {
				elem.classList.remove("badInput");
			}
			elem.className += " goodInput";
		}
		else {
			if (containsClassName(elem, "goodInput")) {
				elem.classList.remove("goodInput");
			}
			elem.className += " badInput"
		}
		if ($(elem)[0].selectedIndex <= 0){
		    if (containsClassName(elem, "goodInput")) {
				elem.classList.remove("goodInput");
			}
			elem.className += " badInput"
		}
		
	}
	if (elem.classList[0] === "roomNum") {
		elem.value = elem.value.trim();
		if (/^([0-9A-Za-z]{0,4})$/.test(elem.value)) {
			if (containsClassName(elem, "badInput")) {
				elem.classList.remove("badInput");
			}
			elem.className += " goodInput";
		}
		else {
			if (containsClassName(elem, "goodInput")) {
				elem.classList.remove("goodInput");
			}
			elem.className += " badInput"
		}
	}
	if (elem.classList[0] === "date") {
		elem.value = elem.value.trim();
		if (/^(([0-9]{1,2}(\/|\-|\.){0,1}[0-9]{1,2}(\/|\-|\.){0,1}([0-9]{2,4})*)|(tomorrow)|(today))$/.test(elem.value)) {
			if (containsClassName(elem, "badInput")) {
				elem.classList.remove("badInput");
			}
			elem.className += " goodInput";
		}
		else {
			if (containsClassName(elem, "goodInput")) {
				elem.classList.remove("goodInput");
			}
			elem.className += " badInput"
		}
	}
	if (elem.classList[0] === "quantity") {
		elem.value = elem.value.trim();
		if (/^([1-9][0-9]{0,1})$/.test(elem.value)) {
			if (containsClassName(elem, "badInput")) {
				elem.classList.remove("badInput");
			}
			elem.className += " goodInput";

			$(".price").text("$" + (5 + elem.value*10));
		}
		else {
			if (containsClassName(elem, "goodInput")) {
				elem.classList.remove("goodInput");
			}
			elem.className += " badInput"
		}
	}
};

function validateMyForm(){
	var shouldSubmit = true;
	if (!$(".name").hasClass("goodInput")){
		shouldSubmit = false;
	}
	if (!$(".mobile").hasClass("goodInput")){
		shouldSubmit = false;
	}
	/*
	if (!$(".address1").hasClass("goodInput")){
		shouldSubmit = false;
	}
	if (!$(".city").hasClass("goodInput")){
		shouldSubmit = false;
	}
	if (!$(".state").hasClass("goodInput")){
		shouldSubmit = false;
	}
	*/
	if (!$(".college").hasClass("goodInput")){
		shouldSubmit = false;
	}
	if (!$(".building").hasClass("goodInput")){
		shouldSubmit = false;
	}
	if (!$(".roomNum").hasClass("goodInput")){
		shouldSubmit = false;
	}
	if (!$(".date").hasClass("goodInput")){
		shouldSubmit = false;
	}
	
	if (!$(".quantity").hasClass("goodInput")){
		shouldSubmit = false;
	}
	
	var times = document.getElementsByClassName("time");
	var atleastOne = false;
	for (var i = 0; i < times.length; i++) {
		if ($(times[i]).hasClass("goodInput")) {
			atleastOne = true;
		}
	}
	console.log(atleastOne);
	if (!atleastOne) {
		shouldSubmit = false;
	}
	
	var colors = document.getElementsByClassName("color");
	console.log(colors.length);
	atleastOne = false;
	for (var i = 0; i < colors.length; i++) {
		if ($(colors[i]).hasClass("goodInputButt")) {
			atleastOne = true;
		}
	}
	console.log(atleastOne);
	if (!atleastOne) {
		shouldSubmit = false;
	}
	
	return shouldSubmit;
}


function containsClassName(elem, name) {
	for (var i = 0; i < elem.classList.length; i++) {
		if (elem.classList[i] == name) {
			return true;
		}
	}
	return false;
}
