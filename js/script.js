var myObj = {"bottle cap": 1, "bottle caps": 1, "receipt": 2, 
"receipts": 2};

var e = {"wa": {
	1: {"recycle": "no", "source": "url"},
	2: {"recycle": "yes", "source": "url"},
	}
};

$(document).ready(function(){
	$('#queried').click(function(){
	var query = $('#query').val();
	for (var key in myObj) {
		if (key === query) {
			$("#answer").html(e.wa[myObj[key]].recycle);
		}
	}
	})
});