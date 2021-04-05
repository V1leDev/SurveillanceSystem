<?php
# start session
session_start();

if (!isset($_SESSION['username'])) {
    header("location:../login.php#login");
}

$pdo = new PDO('mysql:host=localhost;dbname=SurveillanceSystem', $_SESSION['dbusername'], $_SESSION['dbpassword'], array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

$statement = $pdo->prepare("SELECT * FROM TGemeinde");
if ($statement->execute()) {
    $result = $statement->fetchAll();
    echo '<thead>
            <tr>
                <th>GemeindenID</th>
                <th>Name</th>
                <th>Postleitzahl</th>
                <th>Land</th>
            </tr>
            </thead>
            <tbody>';
    foreach ($result as $row) {
        echo "<tr>
        <td>" . $row['GemeindenID'] . "</td>
        <td>" . $row['Name'] . "</td>
        <td>" . $row['Postleitzahl'] . "</td>
        <td>" . $row['Land'] . "</td>
        </tr>";
    }
    echo "</tbody>";
}
$statement = null;
$pdo = null;
?>

