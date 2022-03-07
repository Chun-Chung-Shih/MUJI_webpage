$(window).on("load resize", function(){


	if(typeof cssua === "object" && cssua.ua.mobile && typeof FastClick === "function"){

			var selectors = [
				$("#hGlobalNav h1").get(0),
				$("#hSearch h1").get(0),
				$(".cancel").get(0)
			];

			for(var i = 0, sLen = selectors.length; i < sLen; i++ ) {
				if(selectors[i] != undefined){
				FastClick.attach(selectors[i]);
				}
			}

	}

	$("#hGlobalNav h1").on("click", function(){
		$("body").addClass("menuOpen");
	});

	$("#hGlobalNav .cancel").on("click", function(e){
		$("body").removeClass("menuOpen");
	});

	$("#hSearch h1").on("click", function(){
		$("body").addClass("searchOpen");
		$("#hSearch input[type='search']").focus();
	});

	$("#hSearch .cancel").on("click", function(e){
		$("body").removeClass("searchOpen");
	});


});