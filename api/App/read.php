<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/App.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate app object
$app = new App($db);

// Blog post query
$result = $app->read();
// Get row count
$num = $result->rowCount();

// Check if any posts
if ($num > 0) {
    // Post array
    $apps_arr = array();
    // $apps_arr['data'] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $app_item = array(
            'app' => $app,
            'category' => $category,
            'rating' => $rating,
            'reviews' => $reviews,
            'size' => $size,
            'installs' => $installs,
            'type' => $type,
            'price' => $price,
            'content_rating' => $content_rating,
            'genres' => $genres,
            'last_updated' => $last_updated,
            'current_ver' => $current_ver,
            'android_ver' => $android_ver
        );


        // Push to "data"
        array_push($apps_arr, $app_item);
        //array_push($apps_arr['data'], $app_item);
    }

    // Turn to JSON & output
    echo json_encode($apps_arr);

} else {
    // No Posts
    echo json_encode(
        array('message' => 'No Posts Found')
    );
}
