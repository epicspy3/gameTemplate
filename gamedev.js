$( document ).ready(function() {
	$("#tires").hide();
	$("key").hide();

	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight1.jpg')");
		$("#goRight1").hide();
		$("#goBack").hide();
		$("#goRight-Straight1").show();
		$("#goRight-Right2").show();
		$("key").hide();
	});

	$("#tires").click(function() {
		$("#tires").fadeOut(1000);
		$("key").show();
	});
	$("key").click(function() {
		if (!.invSlot1) {
			$(".invSlot1").animate({left: "80px"});
			invSlot1 = true;
		}
	}

	$("#goRight-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/greystone-25.jpg')");
		$("#goRight-Straight1").hide();
		$("#goRight-Straight2").show();
		$("#tires").hide();
	});

	$("#goRight-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/inside2.png')");
		$("#goRight-Straight2").hide();
		$("#goRight-Straight3").show();
		$("#tires").show();
	});

	$("#goRight-Straight3").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight3.jpg')");
		$("#goRight-Straight3").hide();
		$("#goRight-Right2").show();
		$("#tires").hide();
	});

	$("#goRight-Right2").click(function() {
		$("#exploreBody").css("background-image", "url('img/explore2-goBack2.jpg')");
		$("#goRight-Right2").hide();
		$("#goBack").show();
		$("#tires").hide();
	});


	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft1.jpg')");
		$("#goLeft1").hide();
		$("#goLeft2").show();
		$("#tires").hide();
	});

	$("#goLeft-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft2.jpg')");
		$("#goLeft2").hide();
		$("#goLeft3").show();
		$("#tires").hide();
	});

	$("#goLeft-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft3.jpg')");
		$("#goLeft3").hide();
		$("#goBack").show();
		$("#tires").hide();
	});


	$("#goBack").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreHome1.jpg')");
		$("#goBack").hide();
		$("#goRight1").show();
		$("#goLeft1").show();
		$("#tires").hide();
	});




});