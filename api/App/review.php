<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/Review.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate App object
$review = new Review($db);

$review->app = "Amazon Kindle";
// app query
$result = $review->get_reviews();
// Get row count
$num = $result->rowCount();

// Check if any apps
if ($num > 0) {
    // Post array
    $review_arr = array();
    // $apps_arr['data'] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $review = array(
            'app' => $app,
            'translated_review' => $translated_review,
            'sentiment' => $sentiment,
            'sentiment_polarity' => $sentiment_polarity,
            'sentiment_subjectivity' => $sentiment_subjectivity
        );


        // Push to "data"
        array_push($review_arr, $review);
        //array_push($apps_arr['data'], $app_item);
    }

    // Turn to JSON & output
    echo json_encode($review_arr);

} else {
    // No Posts
    echo json_encode(
        array('message' => 'No review Found')
    );
}
