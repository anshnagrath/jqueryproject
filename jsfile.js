 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

 $('.loader').hide();

    var myFacebookToken = 'EAACEdEose0cBAA5IZCNiZBoBe1R7oJxAPN3tTZCzFE65mfiu6oXrrW4ZApu8lFv1foPma9DUz3WcxwlvWZCHZCpiZBZCj8atpl2mCyWZCaiDUg9EZCpWYJrqf3ZAgGyZBdF7RY1mqsIQNr7EaeZBK5oqyuBUKxmyH124kvva7pZBhhO6BWpLDCTU1AW7d9c8GWuuXLeKUR31O4IaAZBhQZDZD&fields=id,name,birthday,about,education,hometown,website,cover,relationship_status,currency,languages,quotes,email';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                        $("#myName").text(response.name);
                $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myEmail").text(response.email);
                   
                    $("#myHomeTown").text(response.hometown.name);
                    $("#mycurrency").text(response.currency.user_currency);
                     $("#mybirthday").text(response.birthday);
                   for (var edu in response.education) {
                var edu1 = $("<div></div>").text(response.education[edu].school.name);
                $("#myeducation").prepend(edu1);
            }
                     for (var wrk in response.work) {
                var wrk1 = $("<div></div>").text(response.work[wrk].employer.name);
                $("#mywork").append(wrk1);
            }
            for (var lang in response.languages)
             {
                var lang1 = $("<div></div>").text(response.languages[lang].name);
                $("#mylang").prepend(lang1);
              }
                      $("#favquotes").text(response.quotes);
                       $("#mywebsite").text(response.website);
            $("#myrel").text(response.relationship_status);
             var coverpic = $("#coverphoto").val(response.cover.source);
            $("#coverphoto").prepend("<img src=" + coverpic[0].value + " id=coverpicture />");
                },
error : function(request,errorType,errorMessage){
                    console.log(request);
                    console.log(errorType);
                    document.write('<h2>'+response.userMessage+'</h2>')
                },
                timeout:3000,
                beforeSend : function(){
                    $('.loader').hide();
                },
                complete : function(){
                   $('.loader').hide();

                }



            }//end argument list 



        );// end ajax call 


    }// end get facebook info

   $("#mybtn").on('click',getFacebookInfo);


  });






