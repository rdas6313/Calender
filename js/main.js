function start(current_date){
	getset_month(current_date);
	getset_year(current_date);
	setdays(current_date);	
	//
}
function setdays(current){
	var lastdate = new Date(current.getFullYear(),current.getMonth()+1,0);
	var today = new Date();
	var check = false;
	if(today.getFullYear() === current.getFullYear() && today.getMonth() === current.getMonth()){
		check = true; 
	}
	current.setDate(1);
	var id = current.getDay()+1;
	var i;
	for(i=current.getDate();i<=lastdate.getDate();i++){
		if(check && today.getDate() === i){
			document.getElementById(id).innerHTML = '<span class="active">'+i+'</span>'
		}else{
			document.getElementById(id).innerHTML = i;
		}
		id++;
	}
}
function getset_month(d){
	var element = document.getElementById("month_name");
	var month = ["January","February","March","April","May","June","July","August","September","Octobar","November","December"];
	element.innerHTML = month[d.getMonth()];
}
function getset_year(d){
	var element = document.getElementById("year_name");
	element.innerHTML = d.getFullYear();
}
function clear(){
	for(var id=1;id<=41;id++){
		document.getElementById(id).innerHTML = '';
	}
}
/**** img load function***/ 
function load_img(img_name){
	img_name = img_name+".jpg";
	document.getElementById("change_image").style.backgroundImage = "url('img/"+img_name+"')";
}

document.body.onload = function(){
	var current = new Date();
	start(current);
	var total_img = 12; //total images.
	var current_img = 0;
	load_img(current_img);
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	left.addEventListener("click",function(){
		current.setMonth(current.getMonth()-1);
		clear();
		current_img = ((total_img+(current_img-1))%total_img);
		load_img(current_img);
		start(current);
	});
	right.addEventListener("click",function(){
		current.setMonth(current.getMonth()+1);
		current_img = ((current_img+1)%total_img);
		load_img(current_img);
		clear();
		start(current);
	})
}
