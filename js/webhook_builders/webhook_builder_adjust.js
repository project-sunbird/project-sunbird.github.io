
// Adjust Dynamic Link Generator Function

function createAdjustWebhook() {
	// Takes inputs and creates a link out of them.

	// Create base link.
	var link = 'https://app.adjust.com/';

	// Grab Primary Adjust Query Parameters
	var ios_tracker_token = window.document.getElementById('ios_tracker_token').value;
	var android_tracker_token = window.document.getElementById('android_tracker_token').value;
	var adgroup = window.document.getElementById('adgroup').value;
	var creative = window.document.getElementById('creative').value;

	// iOS Tracker Token (ios_tracker_token)
	if (ios_tracker_token.length>0) {
		var link = link + ios_tracker_token;
	}
	else {
		window.alert('Your iOS Tracker Token is not filled in or is incorrect.');
		return
	};

	// Android Tracker Token (android_tracker_token)
	if (android_tracker_token.length>0) {
		var link = link + '_' + android_tracker_token; // Key requirement to add underscore between two tokens
	}
	else {
		window.alert('Your Android Tracker Token is not filled in or is incorrect.');
		return
	};

	// Add Adjust s2s and campaign identifiers
	var link = link + '?s2s=1' + '&' + 'campaign={{campaign}}'

	// Add Adgroup (adgroup)
	if (adgroup != 'branch') {
		adgroup = '{{' + adgroup + '}}'; // Add curly brackets if its not the branch param
	}

	if (adgroup.length>0) {
		var link = link + '&' + 'adgroup=' + adgroup ;
	}

	// Add Creative (creative)
	if (creative != 'branch') {
		creative = '{{' + creative + '}}'; // Add curly brackets if its not the branch param
	}

	if (creative.length>0) {
		var link = link + '&' + 'creative=' + creative;
	}

	// Add Custom Query Parameters

	customQueryParams1 = window.document.getElementById('customQueryParams1').value;
	customQueryParams2 = window.document.getElementById('customQueryParams2').value;
	customQueryParams3 = window.document.getElementById('customQueryParams3').value;
	customQueryParams4 = window.document.getElementById('customQueryParams4').value;
	customQueryParams5 = window.document.getElementById('customQueryParams5').value;
	customQueryParams6 = window.document.getElementById('customQueryParams6').value;
	customQueryParams7 = window.document.getElementById('customQueryParams7').value;
	customQueryParams8 = window.document.getElementById('customQueryParams8').value;
	customQueryParams9 = window.document.getElementById('customQueryParams9').value;
	customQueryParams10 = window.document.getElementById('customQueryParams10').value;

	if (customQueryParams1.length > 0) {
		var link = link + '&' + customQueryParams1;}
	if (customQueryParams2.length > 0) {
		var link = link + '&' + customQueryParams2;}
	if (customQueryParams3.length > 0) {
		var link = link + '&' + customQueryParams3;}
	if (customQueryParams4.length > 0) {
		var link = link + '&' + customQueryParams4;}
	if (customQueryParams5.length > 0) {
		var link = link + '&' + customQueryParams5;}
	if (customQueryParams6.length > 0) {
		var link = link + '&' + customQueryParams6;}
	if (customQueryParams7.length > 0) {
		var link = link + '&' + customQueryParams7;}
	if (customQueryParams8.length > 0) {
		var link = link + '&' + customQueryParams8;}
	if (customQueryParams9.length > 0) {
		var link = link + '&' + customQueryParams9;}
	if (customQueryParams10.length > 0) {
		var link = link + '&' + customQueryParams10;}

	console.log(link);

	// Final Link Creation
	window.document.getElementById('generatedAdjustWebhook').value = link;


};
