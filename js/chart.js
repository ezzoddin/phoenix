$(document).ready(function () {


    var all_categories = [];
    var holder = {};
    var pie_arra = [];


    $.ajax({
        type: "GET",
        url: 'http://localhost:8080/mezz_phoenix/app/api/App/categories.php',
        dataType: 'json',
        success: function (data) {
            all_categories = data.categories;
        }, async: false, // <- this turns it into synchronous

        error: function (data, status, error) {

            console.log("error");
        }
    });

    $.ajax({
        type: "GET",
        url: 'http://localhost:8080/mezz_phoenix/app/api/App/read.php',
        dataType: 'json',
        success: function (data) {

            data.forEach(function (d) {
                if (holder.hasOwnProperty(d.category)) {
                    holder[d.category] = holder[d.category] + parseFloat(d.installs);
                } else {
                    holder[d.category] = parseFloat(d.installs);
                }
            });


            for (var prop in holder) {
                pie_arra.push({category: prop, installs: holder[prop]});
            }

            // console.log(pie_arra);


        }, async: false, // <- this turns it into synchronous

        error: function (data, status, error) {

            console.log("error");
        }
    });


    var categories_pie = [];
    for (var i = 0; i < pie_arra.length; i++) {
        categories_pie[i] = pie_arra[i].category.toLowerCase();
    }

    var installs_pie = [];
    for (var i = 0; i < pie_arra.length; i++) {
        installs_pie[i] = pie_arra[i].installs;
    }


    var ctx = $('#canPie')[0].getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: categories_pie,
            datasets: [
                {
                    label: "total",
                    backgroundColor: [
                        "#FE4243",

                    ],
                    borderColor: '#000',
                    data: installs_pie
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Number of installs by categories'
            }
        }
    });


});






