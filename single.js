$(document).ready(function () {


    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };

    var id = getUrlParameter('q');
    const url = 'http://localhost:8080/mezz_phoenix/app/api/App/read_single.php?q=' + id;


    $.ajax({
        url: url,
        dataType: 'json',
        success: function (data) {
            $("#name").text(data.name);
            $("#category").text(data.category);
            $("#rating").text(data.rating);
            $("#reviews").text(data.reviews);
            $("#size").text(data.size);
            $("#installs").text(data.installs);
            $("#type").text(data.type);
            $("#price").text(data.price);
            $("#content_rating").text(data.content_rating);
            $("#genres").text(data.genres);
            $("#last_updated").text(data.last_updated);
            $("#current_version").text(data.current_version);
            $("#android_version").text(data.android_version);



            //console.log(data.comments);
            $.each(data.comments, function (i) {
                var templateString = '                     <div class="card text-center">' +
                    '                           <div class="card-body">' +
                    '                               <p class="card-text">' + data.comments[i].translated_review + '</p>' +
                    '                               <br>' +
                    '                               <hr class="style1">' +
                    '                               <br>' +
                    '                               <div class="box-12">' +
                    '                                   <div class="left-img">' +
                    '                                       <img class="card-img-top"' +
                    '                                           src="https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301"\n' +
                    '                                           alt="">' +
                    '                                   </div>' +
                    '                                   <div class="text-right">' +
                    '                                       <div class="up-2">' +
                    '                                           <p class="sentiment"><b>Sentiment</b></p>' +
                    '                                           <p id="sentiment" class="value-sent">' + data.comments[i].sentiment + '</p>' +
                    '                                       </div>' +
                    '                                       <div class="down-2">' +
                    '                                           <p class="polarity"><b>Sentiment_Polarity</b></p>' +
                    '                                           <p id="sentiment_polarity" class="value-polarity">' + Math.round(data.comments[i].sentiment_polarity * 100) / 100  + '</p>' +
                    '                                       </div>' +
                    '                                   </div>' +
                    '                               </div>' +
                    '                           </div>' +
                    '                       </div>';
                $('#comment').append(templateString);
            })



        },
        error: function (data, status, error) {
            console.log(data);
            console.log(status);
            console.log(error);
        }
    });



    


});


