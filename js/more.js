$(document).ready(function () {


    var category = getUrlParameter('q');
    $("#btn").click(function () {
        item = $("#search").val();
        serach(item);
    });

    $('#slct').change(function () {
        var value = $(this).val();

        //window.location.replace("./more.html?q=" + value);

        $(".sec3").remove();
        view_category(value);

    });

    view_category(category);
    view_categories();

    //get app data by category name
    function view_category(category) {
        $.ajax({
            type: "GET",
            url: 'http://localhost:8080/mezz_phoenix/app/api/App/view_categories.php?q=' + category,
            dataType: 'json',

            success: function (data) {

                var i, j, result, chunk = 4;
                var counter = 0;
                for (i = 0, j = data.length; i < j; i += chunk) {
                    result = data.slice(i, i + chunk);
                    counter++;
                    let row = '<div class="sec3 ">';
                    $.each(result, function (i) {

                        if (result[i].name.length > 20) {
                            result[i].name = result[i].name.substring(0, 20);
                            result[i].name = result[i].name.concat(" ...");
                        }

                        row += '<div class="card-1">' +
                            '            <div class="up">' +
                            '                <p class="app-name"><a href="single.html?q=' + result[i].id + '">' + result[i].name + ' </p></a> ' +
                            '            </div>' +
                            '            <div class="down">' +
                            '                <div class="left">' +
                            '                    <div class="up-1">' +
                            '                        <p class="downloads-c">' + result[i].installs + '</p>' +
                            '                    </div>' +
                            '                    <div class="down-1">' +
                            '                        <p class="downloads">Downloads</p>' +
                            '                    </div>' +
                            '                </div>' +
                            '                <div class="right">' +
                            '                    <div class="up-1 row">' +
                            '                        <i class="las la-star"></i>' +
                            '                        <p class="downloads-c">' + result[i].rating + '</p>' +
                            '                    </div>' +
                            '                    <div class="down-1">' +
                            '                        <p class="downloads">Rating</p>' +
                            '                    </div>' +
                            '                </div>' +
                            '            </div>' +
                            '   </div>';
                    })
                    $('#result').append(row);

                }
            },
            error: function (data, status, error) {

                console.log("error");
            }
        });

    }

    //get url parameter
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

    //get  categories
    function view_categories() {
        $.ajax({
            type: "GET",
            url: 'http://localhost:8080/mezz_phoenix/app/api/App/categories.php',
            dataType: 'json',
            success: function (data) {

                var all_categories = data.categories;

                $.each(all_categories, function (i) {

                    //console.log(all_categories[i]);
                    let option = '<option value="' + all_categories[i].toLowerCase() + '">' + all_categories[i].toLowerCase() + '</option>';
                    $('#slct').append(option);

                })
            },
            error: function (data, status, error) {

                console.log("error");
            }
        });
    }

    // search
    function serach(item) {
        $.ajax({
            type: "GET",
            url: 'http://localhost:8080/mezz_phoenix/app/api/App/search.php?q=' + item,
            dataType: 'json',

            success: function (data) {

                if (data.message == "No Result Found") {
                    let row = '<h3>No Result Found</h3>';
                    $('#result').append(row);
                }
                var i, j, result, chunk = 4;
                var counter = 0;
                for (i = 0, j = data.length; i < j; i += chunk) {
                    result = data.slice(i, i + chunk);
                    counter++;
                    $(".sec3").remove();
                    let row = '<div class="sec3 ">';
                    $.each(result, function (i) {

                        if (result[i].name.length > 20) {
                            result[i].name = result[i].name.substring(0, 20);
                            result[i].name = result[i].name.concat(" ...");
                        }

                        row += '<div class="card-1">' +
                            '            <div class="up">' +
                            '                <p class="app-name"><a href="single.html?q=' + result[i].id + '">' + result[i].name + ' </p></a> ' +
                            '            </div>' +
                            '            <div class="down">' +
                            '                <div class="left">' +
                            '                    <div class="up-1">' +
                            '                        <p class="downloads-c">' + result[i].installs + '</p>' +
                            '                    </div>' +
                            '                    <div class="down-1">' +
                            '                        <p class="downloads">Downloads</p>' +
                            '                    </div>' +
                            '                </div>' +
                            '                <div class="right">' +
                            '                    <div class="up-1 row">' +
                            '                        <i class="las la-star"></i>' +
                            '                        <p class="downloads-c">' + result[i].rating + '</p>' +
                            '                    </div>' +
                            '                    <div class="down-1">' +
                            '                        <p class="downloads">Rating</p>' +
                            '                    </div>' +
                            '                </div>' +
                            '            </div>' +
                            '   </div>';
                    });
                    $('#result').append(row);
                }
            }, error: function (data, status, error) {

                console.log("error");
            }

        });
    }


});


