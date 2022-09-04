<?php


// AddData('John', 'Doe', 'john@example.com', '1', 'member', 'math', '12:00-13:00', '05443332211', 3);
// DeleteData('John', 'Doe');

// $modifiedData = array('department'=>'2');
// ModifyData('John', 'Doe', $modifiedData);

function AddData($name, $surname, $mail, $department, $position, $course, $officeTime, $phoneNumber, $officeNumber)
{
    $servername = "eu-cdbr-west-02.cleardb.net";
    $username = "b2d7ba3e067c00";
    $password = "32e40d6d";
    $database = "heroku_a1d067ee66e647b";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO persons (name, surname, mail, department, position, course, officeTime, phoneNumber, officeNumber)
        VALUES ('$name', '$surname', '$mail', '$department', '$position', '$course', '$officeTime', '$phoneNumber', '$officeNumber')";

    if ($conn->query($sql) === true) {
        echo "yep";
    }
}

function DeleteData($name, $surname)
{
    $servername = "eu-cdbr-west-02.cleardb.net";
    $username = "b2d7ba3e067c00";
    $password = "32e40d6d";
    $database = "heroku_a1d067ee66e647b";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "DELETE FROM persons WHERE name='$name' AND surname='$surname'";

    if ($conn->query($sql) === true) {
        echo "yep";
    }
}

function ModifyData($name, $surname, $modifiedData)
{
    $servername = "eu-cdbr-west-02.cleardb.net";
    $username = "b2d7ba3e067c00";
    $password = "32e40d6d";
    $database = "heroku_a1d067ee66e647b";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "UPDATE persons ";

    if (count($modifiedData) > 0) {
        $sql .= "SET ";

        foreach ($modifiedData as $key => $value) {
            $sql .= $key . "='" . $value . "' ";
        }

        $sql .= "WHERE name='$name' AND surname='$surname'";
    }

    // echo $sql;

    if ($conn->query($sql) === true) {
        echo "yep";
    }
}

function ListData($name, $surname)
{
    $servername = "eu-cdbr-west-02.cleardb.net";
    $username = "b2d7ba3e067c00";
    $password = "32e40d6d";
    $database = "heroku_a1d067ee66e647b";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM persons";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "id: " . $row["id"] . " - Name: " . $row["firstname"] . " " . $row["lastname"] . "<br>";
        }
    }
}

?>
