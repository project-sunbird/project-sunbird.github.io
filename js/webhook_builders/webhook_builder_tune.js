
// TUNE Dynamic Link Generator Function

function createTuneWebhook() {
	// Takes inputs and creates a link out of them.

	// Create base link.
	var link = 'http://'

	// Grab Primary Tune Query Parameters
	var advertiser_id = window.document.getElementById('advertiser_id').value;
	var site_id = window.document.getElementById('site_id').value;
	var action = '&action=click';

	// Add Tune Advertiser Id (advertiser_id)
	if (advertiser_id.length>0) {
		var link = link + advertiser_id;
	}
	else {
		window.alert('Your Tune Advertiser Id is not filled in or is incorrect.');
		return
	};

	// Add Tune main string identifiers

	var link = link + '.measure.mobileapptracking.com/serve?response_format=json&integration_id=1993&created_at={{event.date}}&user_id={{event.metadata.identity}}&timestamp={{event.date}}&ios_ad_tracking_disabled=0&google_ad_tracking=1&sub_publisher=Branch&sub_campaign={{click.link_data.~campaign}}&sub_placement={{click.link_data.~channel}}&sub_keyword={{click.link_data.~tags}}&tracking_id={{click.branch_id}}&device_ip={{click.browser.metadata.ip}}{{click.device.metadata.ip}}&user_agent={{click.browser.metadata.userAgent}}&google_aid={{click.device.metadata.google_advertising_id}}&ios_ifa={{click.device.hardware_id}}'

	// Add Tune Site Id (site_id)
	if (site_id.length>0) {
		var link = link + '&site_id=' + site_id;
	}
	else {
		window.alert('Your Tune Site Id is not filled in or is incorrect.');
		return
	};

	var link = link + action

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

	console.log(link)

	// Final Link Creation
	window.document.getElementById('generatedTuneWebhook').value = link

};
