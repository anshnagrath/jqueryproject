
$("document").ready(function(){
 var token='EAACEdEose0cBAA5IZCNiZBoBe1R7oJxAPN3tTZCzFE65mfiu6oXrrW4ZApu8lFv1foPma9DUz3WcxwlvWZCHZCpiZBZCj8atpl2mCyWZCaiDUg9EZCpWYJrqf3ZAgGyZBdF7RY1mqsIQNr7EaeZBK5oqyuBUKxmyH124kvva7pZBhhO6BWpLDCTU1AW7d9c8GWuuXLeKUR31O4IaAZBhQZDZD'
 var getPostDetails = function getdetails() {
        $("#feedPost").empty();
        //ajax call start
        $.ajax('https://graph.facebook.com/me?fields=posts&access_token=' + token,{
            type: 'GET',
            timeout: 4000,
            success: function(response, status, xhr) {
                for (var feed in response.posts.data) {
                    var d = new Date((response.posts.data[feed].created_time));
                    var post1 = $("<div></div>").text(response.posts.data[feed].story);
                    var date1 = $("<div class='col-sm-6 col-md-6 col-lg-6 col-xs-6' style='text-align:right;border-right:3px solid #eee;padding:0 5px'></div>").text(d.toLocaleDateString("en-US"));
                    var time1 = $("<div class='col-sm-6 col-md-6 col-lg-6 col-xs-6' style='text-align:left;padding:0 5px'></div>").text(d.toLocaleTimeString("en-US"));
                    var newpost = $("<div class='row feedPost'></div>").append(post1, date1, time1);
                    $("#feedPost").append(newpost);
                }
            },
            error: function(xhr, status, error) {
                alert("Please check console for error");
                console.log(status);
                console.log(error);
            }
        }
    }
             $("#feeds").on('click',getdetails);
       
        }); //ajax call end