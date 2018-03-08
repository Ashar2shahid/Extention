var link = location.href;
url(link);

function url(link) {
	

  // use "link" variable to get the link here 

  $.ajax({
     url: "https://boilerpipe-web.appspot.com/extract?url="+link+"/&output=text",
     dataType: 'text',
     success: function(data) {
            // use "data" variable to get the plain text
			
			console.log(data);
			
			var request = new XMLHttpRequest();

			request.open("POST", "https://language.googleapis.com/v1/documents:analyzeSentiment?key=AIzaSyCcQXRfVhDe0UHD5FJ-RkX5i28y3rsOXaE", true);
			request.setRequestHeader("content-Type", "application/json");
			request.send(JSON.stringify({"document": { "type": "PLAIN_TEXT","content": data}}));
			request.onreadystatechange = function() {
				if (request.readyState == 4 && request.status == 200) {
				console.log(request.responseText);
				}	
			};
          }
     });

}
