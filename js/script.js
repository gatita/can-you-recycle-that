var e = {"wa": {
	"bottle caps": {"recycle": "no", "source": "url"},
	"paper receipts": {"recycle": "yes", "source": "url"},
	"thermal paper receipts": {"recycle": "no", "source": "url"}
	}
};

$(document).ready(function(){
	$('#queried').click(function(){
	var query = $('#query').val();
	for (var key in e.wa) {
		if (key === query) {
			$("#answer").html(e.wa[key].recycle);
		}
	}
	})
});

