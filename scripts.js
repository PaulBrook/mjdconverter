$(document).ready(function(){

    var color = '#'+('000000' + (Math.random()*0xFFFFFF<<0).toString(16)).slice(-6);

    document.getElementById("band").style.background = color;

    var c = tinycolor(color);

    if (c.isDark())
        document.getElementById("band").style.color = "#FFFFFF";
    else
        document.getElementById("band").style.color = "#000000";

});


$('#year').focus(function(){
    $('.change_function').attr("onclick","to_mjd();");
    $('#mjd').val('');
});
$('#month').focus(function(){
    $('.change_function').attr("onclick","to_mjd();");
    $('#mjd').val('');
});
$('#day').focus(function(){
    $('.change_function').attr("onclick","to_mjd();");
    $('#mjd').val('');
});
$('#mjd').focus(function(){
    $('.change_function').attr("onclick","from_mjd();");
    $('#year').val('');
    $('#month').val('');
    $('#day').val('');
});


function to_mjd() {

    var y;
    var m;
    var d;
    var the_mjd;
    
    if (document.getElementById('year').value=="" || document.getElementById('year').value==undefined || document.getElementById('month').value=="" || document.getElementById('month').value==undefined || document.getElementById('day').value=="" || document.getElementById('day').value==undefined) {
     } else {
    

	 y = Number(document.getElementById('year').value);
	 m = Number(document.getElementById('month').value);
	 d = Number(document.getElementById('day').value);
	  
	 if (m == 1 || m == 2){
	     yearp = y - 1;
	     monthp = m + 12;
	 } else {
	     yearp = y;
	     monthp = m;
	 }
	 
	 if (y < 1582 || y == 1582 && m < 10 || y == 1582 && m == 10 && d < 15){
	     B = 0;
	 } else {
	     A = Math.trunc(yearp / 100.);
	     B = 2 - A + Math.trunc(A / 4.);
	 }
	 
	 
	 if (yearp < 0){
	     C = Math.trunc((365.25 * yearp) - 0.75);
	 } else {
	     C = Math.trunc(365.25 * yearp);
	 }
	 
	 D = Math.trunc(30.6001 * (monthp + 1));
	 
	 the_mjd = B + C + D + d + 1720994.5 - 2400000.5;
	 
	 document.getElementById("mjd").value = the_mjd;
	 
     }

    if (Number.isInteger(Number(document.getElementById("year").value))==false) {
	document.getElementById("year").style.color = "red";
    	document.getElementById("mjd").style.color = "red";
	document.getElementById("year").style.textDecoration = "line-through";
    	document.getElementById("mjd").style.textDecoration = "line-through";
    } else if (Number.isInteger(Number(document.getElementById("month").value))==false) {
	document.getElementById("month").style.color = "red";
    	document.getElementById("mjd").style.color = "red";
	document.getElementById("month").style.textDecoration = "line-through";
    	document.getElementById("mjd").style.textDecoration = "line-through";
    } else if (Number.isInteger(Number(document.getElementById("day").value))==false) {
	document.getElementById("day").style.color = "red";
    	document.getElementById("mjd").style.color = "red";
	document.getElementById("day").style.textDecoration = "line-through";
    	document.getElementById("mjd").style.textDecoration = "line-through";
    } else if (Number(document.getElementById("month").value) > 12){
    	document.getElementById("month").style.color = "red";
    	document.getElementById("mjd").style.color = "red";
	document.getElementById("month").style.textDecoration = "line-through";
    	document.getElementById("mjd").style.textDecoration = "line-through";
    } else if (Number(document.getElementById("day").value) > 31){
	document.getElementById("day").style.color = "red";
	document.getElementById("mjd").style.color = "red";
	document.getElementById("day").style.textDecoration = "line-through";
	document.getElementById("mjd").style.textDecoration = "line-through";
    } else if (Number(document.getElementById("day").value) > 30 && (Number(document.getElementById("month").value) == 4 || Number(document.getElementById("month").value) == 6 || Number(document.getElementById("month").value) == 9 || Number(document.getElementById("month").value) == 11)){
	document.getElementById("day").style.color = "red";
	document.getElementById("mjd").style.color = "red";
	document.getElementById("day").style.textDecoration = "line-through";
	document.getElementById("mjd").style.textDecoration = "line-through";
} else if (Number(document.getElementById("day").value) > 29 && Number(document.getElementById("month").value) == 2){
	document.getElementById("day").style.color = "red";
	document.getElementById("mjd").style.color = "red";
	document.getElementById("day").style.textDecoration = "line-through";
	document.getElementById("mjd").style.textDecoration = "line-through";
    } else if (Number(document.getElementById("day").value) == 29 && Number(document.getElementById("month").value) == 2 && (Number(document.getElementById("year").value)%4 != 0 || (Number(document.getElementById("year").value)%100 == 0 && Number(document.getElementById("year").value)%400 != 0))) {
	document.getElementById("day").style.color = "red";
	document.getElementById("mjd").style.color = "red";
	document.getElementById("day").style.textDecoration = "line-through";
	document.getElementById("mjd").style.textDecoration = "line-through";
    } else {
	document.getElementById("year").style.color = "black";
	document.getElementById("month").style.color = "black";
    	document.getElementById("day").style.color = "black";
    	document.getElementById("mjd").style.color = "black";
	document.getElementById("year").style.textDecoration = "none";
	document.getElementById("month").style.textDecoration = "none";
    	document.getElementById("day").style.textDecoration = "none";
    	document.getElementById("mjd").style.textDecoration = "none";
    }

}


function from_mjd() {
    
    var y;
    var m;
    var d;
    var the_mjd;
    
    if (document.getElementById('mjd').value=="" || document.getElementById('mjd').value==undefined) {
    } else {
	
	the_mjd = Number(document.getElementById('mjd').value);
	
	jd = the_mjd + 2400000.5 + 0.5;
	
	I = Math.floor(jd);
	
	F = jd-I;
	
	I = parseInt(I);
	
	A = Math.trunc((I - 1867216.25)/36524.25);
	
	if (I > 2299160){
 	    B = I + 1 + A - Math.trunc(A / 4.);
	} else {
 	    B = I;
	}
	
	C = B + 1524;
	
	D = Math.trunc((C - 122.1) / 365.25);
	
	E = Math.trunc(365.25 * D);
	
	G = Math.trunc((C - E) / 30.6001);
	
	d = C - E + F - Math.trunc(30.6001 * G);
	
	if (G < 13.5){
 	    m = G - 1;
	} else {
 	    m = G - 13;
	}
	
	if (m > 2.5){
 	    y = D - 4716;
	} else {
            y = D - 4715;
	}
	

	if (m.toString().length == 1) {
	    m = '0' + m;
	}

	if (d.toString().length == 1) {
	    d = '0' + d;
	}

	document.getElementById("year").value = y;
	document.getElementById("month").value = m;
	document.getElementById("day").value = d;
    }
    
    if (Number.isInteger(Number(document.getElementById("mjd").value))==false) {
	document.getElementById("year").style.color = "red";
	document.getElementById("month").style.color = "red";
	document.getElementById("day").style.color = "red";
	document.getElementById("mjd").style.color = "red";
	document.getElementById("year").style.textDecoration = "line-through";;
	document.getElementById("month").style.textDecoration = "line-through";
	document.getElementById("day").style.textDecoration = "line-through";
	document.getElementById("mjd").style.textDecoration = "line-through";
    } else {
	document.getElementById("year").style.color = "black";
	document.getElementById("month").style.color = "black";
	document.getElementById("day").style.color = "black";
	document.getElementById("mjd").style.color = "black";
	document.getElementById("year").style.textDecoration = "none";
	document.getElementById("month").style.textDecoration = "none";
	document.getElementById("day").style.textDecoration = "none";
	document.getElementById("mjd").style.textDecoration = "none";
    }
    
}



