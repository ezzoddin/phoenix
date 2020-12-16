<?php

class App
{
    // DB stuff
    private $conn;
    private $table = 'playstore';

    // Apps Properties
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

    // Get Apps
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

        // Bind name
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


    public function most_download($limit)
    {
        // Create query
        $query = "SELECT * FROM  " . $this->table . " ORDER BY installs  DESC  LIMIT $limit";

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Execute query
        $stmt->execute();

        return $stmt;

    }

    public function most_points($limit)
    {
        // Create query
        $query = "SELECT * FROM  " . $this->table . " ORDER BY rating  DESC  LIMIT $limit";

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Execute query
        $stmt->execute();

        return $stmt;

    }

    public function find($item)
    {
        // Create query
        $query = "SELECT * FROM  " . $this->table . "  WHERE app LIKE :keywords OR category LIKE :keywords OR  genres LIKE :keywords";

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        $stmt->bindValue(':keywords', '%' . $item . '%', PDO::PARAM_STR);

        // Execute query
        $stmt->execute();

        return $stmt;

    }


    public function find_related_apps($name, $limit)
    {
        // Create query
        $query = "SELECT * FROM  " . $this->table . "  WHERE category = :name LIMIT $limit";

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        $stmt->bindValue(':name', $name);

        // Execute query
        $stmt->execute();

        return $stmt;

    }

}