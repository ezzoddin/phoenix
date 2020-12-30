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

// Get ID
$app->app = isset($_GET['q']) ? $_GET['q'] : die();

// Get app
$app->read_single();

// Create array
$app_arr = array(

    'app' => $app->app,
    'category' => $app->category,
    'rating' => $app->rating,
    'reviews' => $app->reviews,
    'size' => $app->size,
    'installs' => $app->installs,
    'type' => $app->type,
    'price' => $app->price,
    'content_rating' => $app->content_rating,
    'genres' => $app->genres,
    'last_updated' => $app->last_updated,
    'current_ver' => $app->current_ver,
    'android_ver' => $app->android_ver,
    'comments' => $app->comments
);

// Make JSON
print_r(json_encode($app_arr));