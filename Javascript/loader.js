var newHash;
var docTitle = document.title;


var framselect = 1;
function launcher(i){	////////////CROSS FADER
	//bottom frame
	$("#iFrameInput"+framselect).css({'z-index': 0, 'opacity': 1}); 
	$("#iFrameInput"+framselect).attr("src", targetlist[i]); //GO IFRAME
	$("#id").css({'opacity': 0});
	$("#id").empty();
	document.title = docTitle + " . " + symbol[i];
	//$("#id").html('<p>'+symbol[i]+'</p>');	
	setTimeout(function(){ //bottom go top
		$("#iFrameInput"+framselect).css({'z-index': 1});
		$("#id").css({'opacity': 1});
		//top frame select
		if(framselect>=2){framselect = 1;}else{framselect=framselect+1;} 
		$("#iFrameInput"+framselect).css({'opacity': 0, 'z-index':0});
		$("#iFrameInput"+framselect).attr("src", '');
	}, 0);
	
	////load txt
	
/*	$.ajax({
        type: "GET",
        url: "https://storage.googleapis.com/maslomemory/alive/timetochange.txt",
        dataType: "text",
        success: function(data) {alert(data); processTxt(data);}
		
     });*/
	
	
	
	$("#experienceContainer").css({'z-index': ''});
	
	
	

	
};


function grabber(i){
	launcher(i); //launch url
	//$("#through").attr("href", targetlist[i]);
};
function backHome(){	
	window.location.hash = 'home';
};



/*function processTxt(data){
	alert(data);
	var str = document.getElementById("message").value;
	var focus = Math.floor(Math.random()*str.length);
	
	document.getElementById("message").value = str.replaceAt(focus+mouseSpeed, encoder.textContent.charAt(focus)); 
}*/