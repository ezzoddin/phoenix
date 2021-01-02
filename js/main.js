$(document).ready(function () {


    //most download section
    $.ajax({

        type: "GET",
        url: 'http://localhost:8080/rest_api/api/App/most_download.php' ,
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
                $('#download').append(box);


            })

        },
        error: function (data, status, error) {
            console.log(data);
            console.log(status);
            console.log(error);
        }
    });


    //most point section
    $.ajax({

        type: "GET",
        url: 'http://localhost:8080/rest_api/api/App/most_points.php' ,
        dataType: 'json',
        success: function (data) {
            //console.log(data);

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
                $('#point').append(box);


            })

        },
        error: function (data, status, error) {
            console.log(data);
            console.log(status);
            console.log(error);
        }
    });

    //$("#most").attr("href", "./more.html?q=" + cat);


});



