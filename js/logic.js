console.log("linked");

//Example streamer API calls
//https://wind-bow.gomix.me/twitch-api/streams/test_channel
//https://wind-bow.gomix.me/twitch-api/streams/nickmercs
//https://wind-bow.gomix.me/twitch-api/streams/freecodecamp
//https://wind-bow.gomix.me/twitch-api/streams/comster404


function main(){
//test list
var list = document.querySelector("#list");
list.innerHTML = "<li>Test</li>";

	//loop through array of channels
	var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	//getJson
	var channelName = "starladder5"
	var searchUrl = "https://wind-bow.gomix.me/twitch-api/streams/" + channelName;
	$.getJSON(searchUrl, function(json) {
		console.log(json);
		//if null show as offline
		if(json.stream == null){
			alert("offline");
		} else {
			alert("online!");
		}
		//else show as online and stream info


		//show placeholder if account closed - this may have been removed from API.

	});//getJSON

//button to add a streamer

}; //main




$(document).ready(main());

//list.appendChild(document.createElement('div')).innerHTML = "<a href='" + pageUrl + "' class='list-group-item' target='_blank'>" + "<h4 class='list-group-item-heading'>" + articleTitle + "</h4>" + "<p class='list-group-item-text'>" + extractTrunc + "</p>" + "</a>";