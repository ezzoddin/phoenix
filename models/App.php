<?php

class App
{
    // DB stuff
    private $conn;
    private $table = 'playstore';

    // Post Properties
    public $app;
    public $category;
    public $rating;
    public $reviews;
    public $size;
    public $installs;
    public $type;
    public $price;
    public $content_rating;
    public $genres;
    public $last_updated;
    public $current_ver;
    public $android_ver;


    // Constructor with DB
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // Get Posts
    public function read()
    {
        // Create query
        $query = "SELECT * FROM " . $this->table;

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Execute query
        $stmt->execute();

        return $stmt;
    }

}