var appName = 'דווריים';
document.addEventListener("deviceready", init, false);
function init() {
	console.log('deviceready');
	//fastclick - https://github.com/ftlabs/fastclick	
	FastClick.attach(document.body);
    console.log('index.js FastClick');
    //handle client side session timeout
    //setSessionTimeout();	
	//document.addEventListener("backbutton", onBackKeyDown, false);		

}

function startScan() {
/*
http://www.raymondcamden.com/2014/03/05/Barcode-Scanner-sample-and-new-repo-for-Cordova-examples
https://github.com/wildabeast/BarcodeScanner
*/
	console.log('startScan');
	cordova.plugins.barcodeScanner.scan(
		function (result) {			
			var s =
			"Result: " + result.text + ", " +
			"Format: " + result.format + ", " +
			"Cancelled: " + result.cancelled;
			console.log(s);
			//var resultDiv=document.getElementById(divResult);			
			//resultDiv.innerHTML = result.text;					
			//resultDiv.style.display="block";
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);

}

//handle back button
function onBackKeyDown() {
	navigator.notification.confirm(
									'האם אתה בטוח שברצונך לצאת מהיישום?', 		  //message
									exitFromApp, 		              //callback function
									appName,                        //title
									['יציאה', 'ביטול']);                  //button labels
}									

function exitFromApp(buttonIndex) {
        if (buttonIndex === 1) {
			if (navigator.app) {
				navigator.app.exitApp();
			} else if (navigator.device) {
				navigator.device.exitApp();
              }
		}
}