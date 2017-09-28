
// Dynamic Link Generator Function

function createDynamicLink() {
	// Takes inputs and creates a link out of them.

	// // Create base link.
	var link = 'https://'

	// Grab link domain.
	domain = window.document.getElementById('domain').value;
	console.log(domain.length)
	if (domain.length > 0) {
		var link = link + domain;
	}
	else {
		var link = link + 'bnc.lt/';}

	// Add API /a/ link syntax.
	var link = link + '/a/'

	// Add Branch Key.
	branchKey = window.document.getElementById('branchKey').value;
	var link = link + branchKey

	// Add Start of Query Params
	var link = link + '?'

	// Add Branch Analytics Tags
	channel = window.document.getElementById('channel').value;
	feature = window.document.getElementById('feature').value;
	campaign = window.document.getElementById('campaign').value;
	stage = window.document.getElementById('stage').value;
	tag1 = window.document.getElementById('tag1').value;
	tag2 = window.document.getElementById('tag2').value;
	tag3 = window.document.getElementById('tag3').value;
	tag4 = window.document.getElementById('tag4').value;
	tag5 = window.document.getElementById('tag5').value;
	iframeSrc = window.document.getElementById('iframeSrc').value;
	hasApp = window.document.getElementById('hasApp').value;
	debug = window.document.getElementById('debug').value;
	type = window.document.getElementById('type').value;

	if (channel.length > 0) {
		var link = link + 'channel=' + channel;}
	if (feature.length > 0) {
		var link = link + '&' + 'feature=' + feature;}
	if (campaign.length > 0) {
		var link = link + '&' + 'campaign=' + campaign;}
	if (stage.length > 0) {
		var link = link + '&' + 'stage=' + stage;}
	if (tag1.length > 0) {
		var link = link + '&' + 'tags[]=' + tag1;}
	if (tag2.length > 0) {
		var link = link + '&' + 'tags[]=' + tag2;}
	if (tag3.length > 0) {
		var link = link + '&' + 'tags[]=' + tag3;}
	if (tag4.length > 0) {
		var link = link + '&' + 'tags[]=' + tag4;}
	if (tag5.length > 0) {
		var link = link + '&' + 'tags[]=' + tag5;}
	if (iframeSrc.length > 0) {
		var link = link + '&' + 'iframe_src=' + iframeSrc;}
	if (hasApp.length > 0) {
		var link = link + '&' + 'has_app=' + hasApp;}
	if (debug.length > 0) {
		var link = link + '&' + 'debug=' + debug;}
	if (type.length > 0) {
		var link = link + '&' + 'type=' + type;}
	if (duration.length > 0) {
		var link = link + '&' + 'duration=' + duration;}

	// Add Miscellaneous Query Params
	miscQueryParams1 = window.document.getElementById('miscQueryParams1').value;
	miscQueryParams2 = window.document.getElementById('miscQueryParams2').value;
	miscQueryParams3 = window.document.getElementById('miscQueryParams3').value;
	miscQueryParams4 = window.document.getElementById('miscQueryParams4').value;
	miscQueryParams5 = window.document.getElementById('miscQueryParams5').value;
	miscQueryParams6 = window.document.getElementById('miscQueryParams6').value;
	miscQueryParams7 = window.document.getElementById('miscQueryParams7').value;
	miscQueryParams8 = window.document.getElementById('miscQueryParams8').value;
	miscQueryParams9 = window.document.getElementById('miscQueryParams9').value;
	miscQueryParams10 = window.document.getElementById('miscQueryParams10').value;

	if (miscQueryParams1.length > 0) {
		var link = link + '&' + miscQueryParams1;}
	if (miscQueryParams2.length > 0) {
		var link = link + '&' + miscQueryParams2;}
	if (miscQueryParams3.length > 0) {
		var link = link + '&' + miscQueryParams3;}
	if (miscQueryParams4.length > 0) {
		var link = link + '&' + miscQueryParams4;}
	if (miscQueryParams5.length > 0) {
		var link = link + '&' + miscQueryParams5;}
	if (miscQueryParams6.length > 0) {
		var link = link + '&' + miscQueryParams6;}
	if (miscQueryParams7.length > 0) {
		var link = link + '&' + miscQueryParams7;}
	if (miscQueryParams8.length > 0) {
		var link = link + '&' + miscQueryParams8;}
	if (miscQueryParams9.length > 0) {
		var link = link + '&' + miscQueryParams9;}
	if (miscQueryParams10.length > 0) {
		var link = link + '&' + miscQueryParams10;}


	// Add Branch Reserved Values
		// Url Redirects
		iosUrl = window.document.getElementById('iosUrl').value;
		androidUrl = window.document.getElementById('androidUrl').value;
		desktopUrl = window.document.getElementById('desktopUrl').value;
		windowsUrl = window.document.getElementById('windowsUrl').value;
		blackberryUrl = window.document.getElementById('blackberryUrl').value;
		fireUrl = window.document.getElementById('fireUrl').value;
		fallbackUrl = window.document.getElementById('fallbackUrl').value;
		afterClickUrl = window.document.getElementById('afterClickUrl').value;

		// Deeplink Paths
		alwaysDeeplink = window.document.getElementById('alwaysDeeplink').value;
		deeplinkPath = window.document.getElementById('deeplinkPath').value;
		iosDeeplinkPath = window.document.getElementById('iosDeeplinkPath').value;
		androidDeeplinkPath = window.document.getElementById('androidDeeplinkPath').value;

		// Timeouts
		iosRedirectTimeout = window.document.getElementById('iosRedirectTimeout').value;
		androidRedirectTimeout = window.document.getElementById('androidRedirectTimeout').value;

		// Open Graph
		ogTitle = window.document.getElementById('ogTitle').value;
		ogDescription = window.document.getElementById('ogDescription').value;
		ogImage = window.document.getElementById('ogImage').value;
		ogVideo = window.document.getElementById('ogVideo').value;
		ogUrl = window.document.getElementById('ogUrl').value;
		ogType = window.document.getElementById('ogType').value;
		ogRedirect = window.document.getElementById('ogRedirect').value;

		// Deepviews
		deepview = window.document.getElementById('deepview').value;
		iosDeepview = window.document.getElementById('iosDeepview').value;
		androidDeepview = window.document.getElementById('androidDeepview').value;
		desktopDeepview = window.document.getElementById('desktopDeepview').value;

		// Twitter
		twitterCard = window.document.getElementById('twitterCard').value;
		twitterTitle  = window.document.getElementById('twitterTitle').value;
		twitterDescription  = window.document.getElementById('twitterDescription').value;
		twitterSite  = window.document.getElementById('twitterSite').value;
		twitterAppCountry  = window.document.getElementById('twitterAppCountry').value;

    var branchReservedData = {};

		// Url Redirects
		if (iosUrl.length > 0) {
			branchReservedData['$ios_url'] = iosUrl;}
		if (androidUrl.length > 0) {
				branchReservedData['$android_url'] = androidUrl;}
		if (desktopUrl.length > 0) {
				branchReservedData['$desktop_url'] = desktopUrl;}
		if (windowsUrl.length > 0) {
				branchReservedData['$windows_url'] = windowsUrl;}
		if (blackberryUrl.length > 0) {
				branchReservedData['$blackberry_url'] = blackberryUrl;}
		if (fireUrl.length > 0) {
				branchReservedData['$fire_url'] = fireUrl;}
		if (fallbackUrl.length > 0) {
				branchReservedData['$fallback_url'] = fallbackUrl;}
		if (afterClickUrl.length > 0) {
				branchReservedData['$after_click_url'] = afterClickUrl;}

		// Deeplink Paths
		if (alwaysDeeplink.length > 0) {
				branchReservedData['$always_deeplink'] = alwaysDeeplink;}
		if (deeplinkPath.length > 0) {
				branchReservedData['$deeplink_path'] = deeplinkPath;}
		if (iosDeeplinkPath.length > 0) {
				branchReservedData['$ios_deeplink_path'] = iosDeeplinkPath;}
		if (androidDeeplinkPath.length > 0) {
				branchReservedData['$android_deeplink_path'] = androidDeeplinkPath;}

		// Timeouts
		if (iosRedirectTimeout.length > 0) {
				branchReservedData['$ios_redirect_timeout'] = iosRedirectTimeout;}
		if (androidRedirectTimeout.length > 0) {
				branchReservedData['$android_redirect_timeout'] = androidRedirectTimeout;}

		// Open Graph
		if (ogTitle.length > 0) {
			branchReservedData['$og-title'] = ogTitle;}
		if (ogDescription.length > 0) {
			branchReservedData['$og-description'] = ogDescription;}
		if (ogImage.length > 0) {
			branchReservedData['$og-image'] = ogImage;}
		if (ogVideo.length > 0) {
			branchReservedData['$og-video'] = ogVideo;}
		if (ogUrl.length > 0) {
			branchReservedData['$og-url'] = ogUrl;}
		if (ogType.length > 0) {
			branchReservedData['$og-type'] = ogType;}
		if (ogRedirect.length > 0) {
			branchReservedData['$og-redirect'] = ogRedirect;}

		// Deepviews
		if (deepview.length > 0) {
			branchReservedData['$deepview'] = deepview;}
		if (iosDeepview.length > 0) {
			branchReservedData['$ios_deepview'] = iosDeepview;}
		if (androidDeepview.length > 0) {
			branchReservedData['$android_deepview'] = androidDeepview;}
		if (desktopDeepview.length > 0) {
			branchReservedData['$desktop_deepview'] = desktopDeepview;}

		// Twitter
		if (twitterCard.length > 0) {
			branchReservedData['$twitter_card'] = twitterCard;}
		if (twitterTitle.length > 0) {
			branchReservedData['$twitter_title'] = twitterTitle;}
		if (twitterDescription.length > 0) {
			branchReservedData['$twitter_description'] = twitterDescription;}
		if (twitterSite.length > 0) {
			branchReservedData['$twitter_site'] = twitterSite;}
		if (twitterAppCountry.length > 0) {
			branchReservedData['$twitter_app_country'] = twitterAppCountry;}

	// JSON Convertion
	JSON.stringify(branchReservedData);
    console.log(branchReservedData);

	// Base 64 Encoding
    if (jQuery.isEmptyObject(branchReservedData) != true) {
		var base64data = window.btoa(JSON.stringify(branchReservedData));
		window.document.getElementById('encodedData').value = base64data;

		// Base64 Encoded Data Validation
		var decodedData = window.atob(base64data);
		console.log(decodedData)
		window.document.getElementById('decodedData').value = decodedData;

		// Form new link with data added in.
		link = link + '&' + 'data=' + base64data + '==';
	}

	// Final Link Creation
	window.document.getElementById('generatedDyanmicLink').value = link
};

