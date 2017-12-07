window.onload = onPageLoad('state');

function onPageLoad(sParam) {
  
  	var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");

    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split("=");
        if (sParameterName[0] == sParam) {
        	if (sParameterName[1] == "did_navi") {
        		document.getElementById("txt_description_").innerHTML = "案内終了";
        	} else {
        		document.getElementById("txt_description_").innerHTML = "終了";
        	}
        	document.getElementById("start_route_").setAttribute( "hidden", "hidden" );
        	document.getElementById("start_navi_").setAttribute( "hidden", "hidden" );
        }
    }
}