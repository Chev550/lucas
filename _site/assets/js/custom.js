// form style
function onFocus(x){
	if (x.value == x.defaultValue){
		x.value = '';
		x.style.color = 'rgba(0, 0, 0, 0.8)';
	}
	else if (x.value != x.defaultValue){
		x.style.color = 'rgba(0, 0, 0, 0.8)';
	}
}
function onBlur(x){
	if (x.value == ''){
		x.value = x.defaultValue;
		x.style.color = 'rgba(0, 0, 0, 0.4)';
	}
	else if (x.value != ''){
		x.style.color = 'rgba(0, 0, 0, 0.4)';
	}
}



// Scroll to show toTop
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#toTop').fadeIn("fast");
    } 
    else {
        $('#toTop').fadeOut("fast");
    }
});



// Hide and Show
function slideToggle(){
	$("div.launchpad").slideToggle("");
}
function hide(){
	$("#launchpad").hide("");
}