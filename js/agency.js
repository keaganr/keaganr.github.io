$(document).ready(function() {
	console.log('Page Loaded');
	$("form").hide();
	$("#weeklyAd").show();
});

$('#api-select-group button').on("click", function() {
	$('#api-select-group button').removeClass('active');
	$(this).addClass('active');
	$("form").hide();

	if ($(this).text() == "Weekly Ad v1") {
		$("#weeklyAd").show();
	} else if ($(this).text() == "Store Locator") {
		$("#storeLocator").show();
	}
});

$('#weeklyAdGo').on("click", function() {

	var storeSlug = $("#storeSlug").val();
	var searchTerm = $("#searchTerm").val();
	var devKey = $("#devKeyWeekly").val();

	var endpoint = 'http://api.target.com/v1/promotions/weeklyad/' + storeSlug + '/search?q=' + searchTerm + '&key=' + devKey;

	$.getJSON(endpoint, function(json, textStatus) {
		console.log(json);
		$("#jsonResponse").text(JSON.stringify(json, null, 4));
		$("#endpointGenerated").text(endpoint);		
	});
})

$('#storeLocatorGo').on("click", function() {

	var location = $("#location").val();
	var range = $("#storeRange").val();
	var limit = $("#storeLimit").val();
	var devKey = $("#devKeyStoreLocator").val();

	"http://api.target.com/v2/store?nearby=44.976034,-93.270196&range=10&limit=100&locale=en-US&key=ltVVgaQ8HQNxDADa7FPyVJifTuRIItIL"

	var endpoint = 'http://api.target.com/v2/store?nearby=' + location + '&range=' + range + '&limit=' + limit + '&locale=en-US&key=' + devKey;

	$.getJSON(endpoint, function(json, textStatus) {
		console.log(json);
		$("#jsonResponse").text(JSON.stringify(json, null, 4));
		$("#endpointGenerated").text(endpoint);
	});
})