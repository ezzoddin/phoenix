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
	var comments = [];
    var sentiment_class, icon, cat;
    var item = "test";
	
	$("#btn").click(function(){
    var getVal = $("#search").val();
	console.log(getVal);
	item=getVal;
	console.log(item);
	});
	

    $.ajax({
        type: "GET",
        url: 'http://localhost/app/api/App/search.php?q=' + item,
        dataType: 'json',
        success: function (data) {

           console.log(data);

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

            //cat = data.category;
			
			
			/*$.each(data, function (i) {

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
                $('#').append(box); //????
			
			}*/

        },
        async: false, // <- this turns it into synchronous
        error: function (data, status, error) {

            console.log("error");
        }

    });
	
	});