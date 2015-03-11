var e = {"wa": {
	"bottle cap": {"recycle": "no", "source": "url"},
	}
};

$(document).ready(function(){
	$("#hello").html(e.wa['bottle cap'].recycle);
});

