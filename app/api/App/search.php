<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/App.php';
include_once '../../models/Review.php';

use App\Models\App;
use App\Config\Database;

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate App object
$app = new App($db);

$item = isset($_GET['q']) ? $_GET['q'] : die();

// app query
$result = $app->find($item);
// Get row count
$num = $result->rowCount();

// Check if any apps
if ($num > 0) {
    // Post array
    $apps_arr =[];
    // $apps_arr['data'] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $app_item = array(
            'id' => $id,
            'name' => $name,
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
            'current_version' => $current_version,
            'android_version' => $android_version
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
        array('message' => 'No Result Found')
    );
}
