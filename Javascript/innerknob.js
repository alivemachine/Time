var innerDeg = 0;
var secondLength = 900;
var audio;

function goInnerKnob() {
	 audio = new Audio('tik.mp3');
	 audio.loop = false;
	 perpetualtrig();
	 $('#handlein').css({boxShadow: 'inset 0px 0px 0px 2px white'});
 };

function perpetualtrig(){
	innerDeg = innerDeg+360/60;
	
	 //normalize projDeg
	if(innerDeg >= 360){
		innerDeg = innerDeg-360;
	}else if(innerDeg < 0){
		innerDeg = innerDeg+360;
	}
	$('#innerknob').css({transform: 'rotate(' + innerDeg + 'deg)' 	});
	
	audio.play();
	secondLength=secondLength+10;
    setTimeout(perpetualtrig, secondLength);
}
		