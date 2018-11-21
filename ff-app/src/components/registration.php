<?php

$dbServername= "localhost";
$dbUserName="root";
$dbPassword="";
$dbName="forward-future";

$conn= mysqli_connect($dbServername,$dbUserName,$dbPassword,$dbName);

if (mysqli_connect_error()) {
    die("Connection failed: " . mysqli_connect_error());
}

echo "Connected successfully";

?>
