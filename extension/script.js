var link = location.href;

url(link);

var polarising_score;

function url(link) {
    console.log("AJAX Start");
    var data = {js_link: link}
    $.ajax({
        url: 'https://35.185.133.86:5000/postmethod',
        data: JSON.stringify(data),
        type: 'POST',
        success: function (response) {
            console.log("AJAX Success. SCORE =>");
			console.log(response);
            console.log(response.score); //T  his works
			polarising_score = response.score;
			chrome.runtime.sendMessage({score: response.score}, function(response) {
              //  console.log(response.farewell);
              });
        },
        error: function (error) {
            console.log("AJAX Error. Error =>");
            console.log(error);
        },
        dataType: "json",
        contentType: 'application/json;charset=UTF-8',
    });

}

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
			sendResponse(polarising_score);
			});
