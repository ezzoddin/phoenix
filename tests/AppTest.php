<?php

use PHPUnit\Framework\TestCase;


class AppTest extends TestCase
{

    public function testCategories()
    {

        $database = new \App\Config\Database();
        $db = $database->connect();

        $app = new \App\Models\App($db);
        $result = $app->find_category("education");
        $actual = $result->rowCount();

        $this->assertGreaterThan(
            0,
            $actual,
            "actual value is not greater than expected"
        );
    }

    public function testReadSingle()
    {

        $database = new \App\Config\Database();
        $db = $database->connect();

        $app = new \App\Models\App($db);

        $app->id = 2;

        $app->read_single();

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

        $this->assertContains(
            $app->id,
            $app_arr,
            "testArray doesn't contains value as value"
        );


    }

    public function testSerach()
    {

        $database = new \App\Config\Database();
        $db = $database->connect();
        $app = new \App\Models\App($db);
        $item = "love";
        $result = $app->find($item);

        $num = $result->rowCount();
        $this->assertIsInt($num);

        $rows = $result->fetchAll();
        $this->assertIsArray($rows);

        foreach ($rows as $row) {
            if (stripos($row['name'], $item) || stripos($row['category'], $item) ||
                stripos($row['genres'], $item) || stripos($row['type'], $item))
                $res = false;

            $this->assertFalse($res);

        }


    }

}
