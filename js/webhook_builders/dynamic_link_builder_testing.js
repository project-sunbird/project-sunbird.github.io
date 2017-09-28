
// You can manipulate the following values to test the generator.
var testValues = {
	'domain': 'bnc.lt',
	'branchKey': '',
	'miscQueryParams1': 'user_id=alpha',
	'miscQueryParams2': 'encrypted_password=kjdlfds',
	'miscQueryParams3': 'test-string-1=true',
	'miscQueryParams4': 'source=pla',
	'miscQueryParams5': 'set_type=test',
	'channel': 'Facebook',
	'feature': 'API',
	'campaign': 'January-Blast',
	'stage': '1',
	'tag1': 'cohort-a',
	'tag2': 'pla',
	'tag3': 'jet',
	'tag4': 'email',
	'tag5': 'test',
	'iframeSrc': 'false',
	'hasApp': 'true',
	'debug': 'false',
	'type': '0',
	'duration': '10000',
	'iosUrl': 'https://itunes.apple.com/us/app/jet-smartest-way-to-shop-save/id950022424',
	'androidUrl': 'https://play.google.com/store/apps/details?id=com.jet.jet.app',
	'desktopUrl': 'https://jet.com/',
	'windowsUrl': 'https://jet.com/',
	'blackberryUrl': 'https://jet.com/',
	'fireUrl': 'https://jet.com/',
	'fallbackUrl': 'http://austinhay.com/',
	'afterClickUrl': 'http://austinhay.com/',
	'alwaysDeeplink': 'true',
	'deeplinkPath': 'product/test/dcc56757764a45debc3d67d5c2885f21',
	'iosDeeplinkPath': 'product/test/dcc56757764a45debc3d67d5c2885f21',
	'androidDeeplinkPath': 'android/product/test/dcc56757764a45debc3d67d5c2885f21',
	'iosRedirectTimeout': '1500',
	'androidRedirectTimeout': '1500',
	'ogTitle': 'Jet.com - Scott Long Lasting Toilet Paper, White, 27 Rolls',
	'ogDescription': 'Scott 1000 Bath Tissue, 1000 sheets per roll, pack of 27 rollsLong Lasting Toilet Paper with Scott 1000 Bath Tissue',
	'ogImage': 'none',
	'ogVideo': 'none',
	'ogUrl': 'https://jet.com/product/Scott-Long-Lasting-Toilet-Paper-White-27-Rolls/dcc56757764a45debc3d67d5c2885f21',
	'ogType': 'none',
	'ogRedirect': 'http://austinhay.com',
	'deepview': 'true',
	'iosDeepview': 'branch_default',
	'androidDeepview': 'none',
	'desktopDeepview': 'branch_default',
	'twitterCard': 'none',
	'twitterTitle': 'none',
	'twitterDescription': 'none',
	'twitterSite': 'none',
	'twitterAppCountry': 'none'
};

window.onload = function() {

	for (var i in testValues) {
		console.log(i);
		console.log(testValues[i]);
		window.document.getElementById(i).value = testValues[i];
	};

};
