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

    // Get App
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

    // Get Single App
    public function read_single()
    {
        // Create query
        $query = "SELECT * FROM " . $this->table . " WHERE app = ? ";

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Bind ID
        $stmt->bindParam(1, $this->app);

        // Execute query
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        // Set properties
        $this->app = $row['app'];
        $this->category = $row['category'];
        $this->rating = $row['rating'];
        $this->reviews = $row['reviews'];
        $this->installs = $row['installs'];
        $this->type = $row['type'];
        $this->price = $row['price'];
        $this->content_rating = $row['content_rating'];
        $this->genres = $row['genres'];
        $this->last_updated = $row['last_updated'];
        $this->current_ver = $row['current_ver'];
        $this->android_ver = $row['android_ver'];


    }

    public function find_comment_by_app_name($app_name)
    {

    }

    public function mostdownlod($count){

    }








}