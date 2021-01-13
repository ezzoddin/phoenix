$(document).ready(function () {


    var id = getUrlParameter('q');
    var comments = [];
    var sentiment_class, icon, cat;

    view_info(id);
    view_related_apps(cat);


    $("#more").attr("href", "./more.html?q=" + cat);

    function view_info(id) {

        $.ajax({
            type: "GET",
            url: 'http://mezz.ir/phoenix/app/api/App/read_single.php?q=' + id,
            dataType: 'json',
            success: function (data) {

                //console.log(data);

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

                cat = data.category;
                comments = data.comments;

                //console.log(comments);

                $.each(comments, function (i) {

                    if (comments[i].translated_review !== 'nan') {

                        if (comments[i].sentiment.toLowerCase() === 'negative') {
                            sentiment_class = 'negative'
                        } else if (comments[i].sentiment.toLowerCase() === 'neutral') {
                            sentiment_class = 'positive'
                        } else {
                            sentiment_class = 'neutral'
                        }

                        if (comments[i].sentiment_polarity > 0) {
                            icon = "fa-thumbs-up";
                        } else if (comments[i].sentiment_polarity < 0) {
                            icon = "fa-thumbs-down";
                        } else {
                            icon = "fa-question-circle";
                        }

                        var create_cm = ' <div class="box-comment box--1 ' + sentiment_class + '">' +
                            '        <img class="user" src="image/764 [Converted].jpg">' +
                            '        <div class="left-comment">' +
                            '            <div class="name-date">' +
                            '                <p class="name">User Comment</p>' +
                            '                <p class="text-danger">Relate to: ' +
                            '                   <span class="text-muted">' + comments[i].app + '</span>' +
                            '                </p>' +
                            '            </div>' +
                            '            <p class="comment-1 py-2">' + comments[i].translated_review + '</p>' +
                            '            <hr>' +
                            '               <p class=""><span class="text-muted "><i class="fa ' + icon + '" aria-hidden="true"></i></span></p>' +
                            '        </div>' +
                            '    </div>';
                        $('#comment').append(create_cm);
                    }
                })


            },
            async: false, // <- this turns it into synchronous
            error: function (data, status, error) {

                console.log("error");
            }
        });

    }

    function view_related_apps(cat) {
        $.ajax({

            type: "GET",
            url: 'http://mezz.ir/phoenix/app/api/App/similar_apps.php?q=' + cat,
            dataType: 'json',
            success: function (data) {
                // console.log(data);

                $.each(data, function (i) {

                    if (data[i].name.length > 20) {
                        data[i].name = data[i].name.substring(0, 20);
                        data[i].name = data[i].name.concat(" ...");
                    }

                    var box = '<div class="card-1">' +
                        '        <div class="up">' +
                        '            <p class="app-name">' +
                        '                <a href="single.html?q=' + data[i].id + '">' + data[i].name + '</a>' +
                        '            </p>' +
                        '        </div>' +
                        '        <div class="down">' +
                        '            <div class="left">' +
                        '                <div class="up-1">' +
                        '                    <p class="downloads-c">' + data[i].installs + '</p>' +
                        '                </div>' +
                        '                <div class="down-1">' +
                        '                    <p class="downloads">Downloads</p>' +
                        '                </div>' +
                        '            </div>' +
                        '            <div class="right">' +
                        '                <div class="up-1 row">' +
                        '                    <i class="las la-star"></i>' +
                        '                    <p class="downloads-c">' + data[i].rating + '</p>' +
                        '                </div>' +
                        '                <div class="down-1">' +
                        '                    <p class="downloads">Rating</p>' +
                        '                </div>' +
                        '            </div>' +
                        '        </div>' +
                        '    </div>';
                    $('#similar').append(box);


                })

            },
            error: function (data, status, error) {
                console.log(data);
                console.log(status);
                console.log(error);
            }
        });
    }

    function getUrlParameter(sParam) {
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

});


