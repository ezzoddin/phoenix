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

// Instantiate app object
$app = new App($db);

// Get ID
$app->id = isset($_GET['q']) ? $_GET['q'] : die();

// Get app
$app->read_single();

// Create array
$app_arr = array(

    'id' => $app->id,
    'name' => $app->name,
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
    'current_version' => $app->current_version,
    'android_version' => $app->android_version,
    'comments' => $app->comments
);

// Make JSON
print_r(json_encode($app_arr));