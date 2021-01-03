<?php

namespace App\Models;

use App\Models\Review;
use PDO;

class App
{
    // DB stuff
    private $conn;
    private $table = 'apps';

    // Apps Properties
    public $id;
    public $name;
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
    public $current_version;
    public $android_version;
    public $comments;


    // Constructor with DB
    public function __construct($db)
    {
        $this->conn = $db;
        $this->comments = new Review($db);
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
        $query = "SELECT * FROM " . $this->table . " WHERE id = ? ";

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Bind id
        $stmt->bindParam(1, $this->id);

        // Execute query
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        // Set properties
        $this->id = $row['id'];
        $this->name = $row['name'];
        $this->category = $row['category'];
        $this->rating = $row['rating'];
        $this->reviews = $row['reviews'];
        $this->size = $row['size'];
        $this->installs = $row['installs'];
        $this->type = $row['type'];
        $this->price = $row['price'];
        $this->content_rating = $row['content_rating'];
        $this->genres = $row['genres'];
        $this->last_updated = $row['last_updated'];
        $this->current_version = $row['current_version'];
        $this->android_version = $row['android_version'];

        // Set App Name Of review
        $this->comments->app = $this->name;
        $this->comments = $this->comments->get_reviews();


    }

    // Get Most Download Apps
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

    // Get Most Point Apps
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

    // Serach item
    public function find($item)
    {
        // Create query
        $query = "SELECT * FROM  " . $this->table . "  WHERE name LIKE :keywords OR category  LIKE :keywords OR  genres LIKE :keywords OR type LIKE :keywords ";

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        $stmt->bindValue(':keywords', '%' . $item . '%', PDO::PARAM_STR);

        // Execute query
        $stmt->execute();

        return $stmt;

    }

    // Similar apps
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

    // Get Categories
    public function find_categories()
    {
        // Create query

        $query = "SELECT DISTINCT category FROM  " . $this->table;

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Execute query
        $stmt->execute();

        return $stmt;

    }

    // Get Apps by same category name
    public function find_category($name)
    {
        // Create query
        $query = "SELECT * FROM  " . $this->table . "  WHERE category = :name ";

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        $stmt->bindValue(':name', $name);

        // Execute query
        $stmt->execute();

        return $stmt;

    }


}