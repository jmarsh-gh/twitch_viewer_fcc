console.log("linked");

//Example streamer API calls
//https://wind-bow.gomix.me/twitch-api/streams/test_channel
//https://wind-bow.gomix.me/twitch-api/streams/nickmercs
//https://wind-bow.gomix.me/twitch-api/streams/freecodecamp
//https://wind-bow.gomix.me/twitch-api/streams/comster404


function main(){
// 	test back at ya
	function test(searchUrl, title){
		$.getJSON(searchUrl, function(json) {
			var listID = "#" + title;
			var logoID = listID + "logo";
			var listItem = document.querySelector(listID);
			var logo = document.querySelector(logoID);
			console.log(logo);
			//if null show as offline
			if(json.stream == null){
				listItem.innerHTML += "<p class='list-group-item-text'>Offline!</p>";
				listItem.classList.add("offline");
			} else {
				logo.setAttribute("src", json.stream.channel.logo);
				listItem.innerHTML += "<p class='list-group-item-text'>Online! Playing " + json.stream.game + "</p>";
				listItem.classList.add("online");
				console.log(logo);
			}
			//show placeholder if account closed - this may have been removed from API.
		});//getJSON
	}//test

	//loop through array of channels
	var channels = ["starladder5", "ESL_SC2", "OgamingSC2", "freecodecamp"];
	for(var x = 0; x < channels.length; x++){
		console.log(channels[x]);
		var searchUrl = "https://wind-bow.gomix.me/twitch-api/streams/" + channels[x];
		test(searchUrl, channels[x]);
	}//for loop	
    
    //button to add a streamer

	
}//main




$(document).ready(main());

//list.appendChild(document.createElement('div')).innerHTML = "<a href='" + pageUrl + "' class='list-group-item' target='_blank'>" + "<h4 class='list-group-item-heading'>" + articleTitle + "</h4>" + "<p class='list-group-item-text'>" + extractTrunc + "</p>" + "</a>";
//http://stackoverflow.com/questions/28268901/how-do-i-use-innerhtml-inside-a-loop-using-javascript
//<img src='" + json.stream.channel.logo + "'>