var link = location.href;
url(link);

function url(link) {
	

  // use "link" variable to get the link here 

var data = {js_link: link}
$.ajax({
    url: 'https://35.194.238.86:5000/postmethod',
    data: JSON.stringify(data),
    type: 'POST',
    success: function (response) {
        console.log(response);
    },
    error: function (error) {
        console.log("ERROR");
        console.log(error);
    },
    dataType: "json",
    contentType: 'application/json;charset=UTF-8',
});

}
