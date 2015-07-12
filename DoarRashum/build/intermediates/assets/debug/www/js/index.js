document.addEventListener("deviceready", init, false);
function init() {
	console.log('deviceready');
	//fastclick - https://github.com/ftlabs/fastclick	
	FastClick.attach(document.body);
    console.log('FastClick');
    //handle client side session timeout
    //setSessionTimeout();
	document.querySelector("#startScan").addEventListener("touchend", startScan, false);
//	document.querySelector("#ManualBarCode").addEventListener("touchend", ManualBarCode, false);			
	document.addEventListener("backbutton", onBackKeyDown, false);		

}

function startScan() {
/*
http://www.raymondcamden.com/2014/03/05/Barcode-Scanner-sample-and-new-repo-for-Cordova-examples
https://github.com/wildabeast/BarcodeScanner
*/

	cordova.plugins.barcodeScanner.scan(
		function (result) {			
			var s =
			"Result: " + result.text + ", " +
			"Format: " + result.format + ", " +
			"Cancelled: " + result.cancelled;
			console.log(s);
			var resultDiv=document.querySelector("#scanResults");			
			resultDiv.innerHTML = result.text;					
			resultDiv.style.display="block";
			//enable takepic1 button
			if (!(result.cancelled)) {
				$("#takePic1").removeAttr('disabled');
			}
			//enable cancel button
			$("#Cancel").removeAttr('disabled');
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);

}