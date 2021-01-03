$(document).ready(function () {


    view_categories();
    view_most_downloads();
    view_most_points();

    function view_categories() {
        //categories
        $.ajax({

            type: "GET",
            url: 'http://localhost:8080/mezz_phoenix/app/api/App/categories.php',
            dataType: 'json',
            success: function (data) {
                //console.log(data);

                var all_categories = data.categories;
                // console.log(all_categories);

                $.each(all_categories, function (i) {


                    let box = '<div class="col-lg-2">' +
                        '           <div class="card" style="display: flex;flex-direction: column;align-items: center;' +
                        '                                     justify-content: center;background-color: #FFF1F1;height: 140px;' +
                        '                                     width: 140px;border: 0ch;position: relative;border-radius: 15px "' +
                        '               <img src="" alt="">' +
                        '               <p class="category1" style="font-size: 10px"> ' + all_categories[i] + '</p>\n' +
                        '           </div>' +
                        '      </div>';

                    $('#categories').append(box);


                })


            },
            error: function (data, status, error) {
                console.log(data);
                console.log(status);
                console.log(error);
            }
        });
    }

    function view_most_downloads() {
        //most download section
        $.ajax({

            type: "GET",
            url: 'http://localhost:8080/mezz_phoenix/app/api/App/most_download.php',
            dataType: 'json',
            success: function (data) {
                // console.log(data);

                $.each(data, function (i) {

                    if (data[i].name.length > 20) {
                        data[i].name = data[i].name.substring(0, 20);
                        data[i].name = data[i].name.concat(" ...");
                    }

                    let box = '<div class="card-1">' +
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
    }

    function view_most_points() {
        //most point section
        $.ajax({

            type: "GET",
            url: 'http://localhost:8080/mezz_phoenix/app/api/App/most_points.php',
            dataType: 'json',
            success: function (data) {
                //console.log(data);

                $.each(data, function (i) {

                    if (data[i].name.length > 20) {
                        data[i].name = data[i].name.substring(0, 20);
                        data[i].name = data[i].name.concat(" ...");
                    }

                    let box = '<div class="card-1">' +
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
    }


});



