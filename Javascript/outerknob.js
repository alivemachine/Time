 var rotating = false;
 var outerknob = $('#outerknob');
 var knob = $('#knob');
 var rad = knob.width() / 2;
 var elOfs = knob.offset();
 var elPos = {
 	x: elOfs.left,
 	y: elOfs.top
 }
 
 var i;
 var handle = [];
var ang = [];
var col = [];
 var projStrength;
 var projDeg;
 var toDeg;
 var currentProj = 0;

 var j;
 var lang = [];
 var langStrength;
 var currentLang;
var datetime;
var block = false;


perpetualtrigger();
function perpetualtrigger(){

    setTimeout( perpetualtrigger, 1000);
}







 function getRandomColor() {
 	var letters = '0123456789ABCDEF';
 	var color = '#';
 	for (var k = 0; k < 6; k++) {
 		color += letters[Math.floor(Math.random() * 16)];
 	}
 	return color;
 }


 $(window).ready(function () {

 	// newHash = window.location.hash.substring(1); //not working
	 processData();
	 
	 for (i = 0; i < targetlist.length; i++) {
		 if(window.location.hash.substring(1) == handle[i]) {
			//grabber(i);
	 	}
 	 }

 });

function processData() {
	projStrength = 360 / targetlist.length;
	for (i = 0; i < targetlist.length+1; i++) {
		ang[i] = projStrength *i +45;
		col[i] = getRandomColor();
	} 
}



var langDeg;

 $(document).mousedown(function () {
 	rotating = true;
	 if(block == false){
		 goInnerKnob();
		 updateProj(0);
		 block = true;
	 }
	$('#experienceContainer').css({'z-index': '0'}); 
 });

 $(document).mouseup(function (a) {
	 //if(notmobile == true){ //checking if mobile device or not?
 		rotating = (rotating) ? false : rotating;
		$('#experienceContainer').css({'z-index': '1'});
	 
	 //}
 });
 $(document).mousemove(function (e) {
 	var mPos = {
 		x: e.pageX - elPos.x,
 		y: e.pageY - elPos.y
 	};
 	var getAtan = Math.atan2(mPos.x - rad, mPos.y - rad);
 	projDeg = -getAtan / (Math.PI / 180) + 225; //from 45 to 405deg
	 
	 //normalize projDeg
	if(projDeg >= 360){
		projDeg = projDeg-360;
	}else if(projDeg < 0){
		projDeg = projDeg+360;
	}
 	if (rotating) {
 		$('#outerknob').css({transform: 'rotate(' + projDeg + 'deg)'});
		
 		for (i = 0; i < targetlist.length+1; i++) { //PROJECT SELECTOR 
			
 			if (projDeg >= ang[i] && projDeg < ang[i + 1] && i != currentProj) { //selected project
 				updateProj(i);
				//alert('proj go');
 				currentProj = i;
 			}
 		};
		//$('#info1').text(langDeg);
		
		
 	}
 });


 function updateProj(i) { //OUTER-COMPASS
	 
 	//$('#content').css({'background-color': col[i]});
	//$('#iFrameInput1').css({'backgroundImage':'url(thumb/'+(i+1)+'.jpg)'});
	 
	 
	
	 grabber(i);
	 secondLength = 1000;
	 innerDeg = 0;
 	
	 
 	//INIT LANGUAGES
 	langStrength = 360 / 2;
	  
 	for (j = 0; j < targetlist[i].langLength; j++) {
 		lang[j] = {
 			angle: langStrength * j,
 			color: getRandomColor()
 		};
		lang[0].color = proj[i].color;
 	};
	 setTimeout(function(){ 
		 
	 if(i==0){//LOAD INVITATION
	 }else if(i==1){ // MASLO
	 }else if(i==2){   //SECRETMAP
	 }else if(i==3){ //DREAM JOURNAL
	 }else if(i==4){ //BIO
	 }else if(i==5){ //WIKI
	 }else if(i==6){ //MEME
	 }else if(i==7){ //itself
	 }else{	
	 }
		}, 300); 
 }

 function updateLang(j) {  //INNER-COMPASS
	 //$('#knob').css({'background-color': lang[j].color});	
	 //$('#header').text(j);
	 if(currentProj==4 && $('#the-canvas').length){
		queueRenderPage(j+1); 
	 }
 }
