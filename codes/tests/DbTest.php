<?php

use PHPUnit\Framework\TestCase;



class dbTest extends TestCase
{
    public function testConnect()
    {
        $database = new \App\Config\Database();
        $db = $database->connect();

        $this->assertIsObject(
            $db,
            "actual content is object or not"
        );

    }

}