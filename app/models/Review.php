<?php

namespace App\Models;

class Review
{

    // DB stuff
    private $conn;
    private $table = 'reviews';

    // Apps Properties
    public $app;
    public $translated_review;
    public $sentiment;
    public $sentiment_polarity;
    public $sentiment_subjectivity;

    // Constructor with DB
    public function __construct($db)
    {
        $this->conn = $db;
    }


    // Get Reviews
    public function get_reviews()
    {
        // Create query
        $query = "SELECT * FROM `$this->table` WHERE app = ? ";

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Bind name
        $stmt->bindParam(1, $this->app);

        // Execute query
        $stmt->execute();

        // Get Reviews
        $rows = $stmt->fetchAll();

        $comment = [];
        foreach ($rows as $row) {

            $comment_item = array(
                'app' => $row['app'],
                'translated_review' => $row['translated_review'],
                'sentiment' => $row['sentiment'],
                'sentiment_polarity' => $row['sentiment_polarity'],
                'sentiment_subjectivity' => $row['sentiment_subjectivity']
            );

            array_push($comment, $comment_item);
        }


        return $comment;
    }


}