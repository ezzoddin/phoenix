<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/App.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate App object
$app = new App($db);

// app query
$result = $app->find_categories();
// Get row count
$num = $result->rowCount();

// Check if any apps
if ($num > 0) {
    // Post array
    //$apps_arr = array();
    $apps_arr['categories'] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        //$app_item += $category;

        // Push to "data"
        //array_push($apps_arr, $category);
        array_push($apps_arr['categories'], $category);
    }

    // Turn to JSON & output
    echo json_encode($apps_arr);

} else {
    // No Posts
    echo json_encode(
        array('message' => 'No Apps Found')
    );
}
