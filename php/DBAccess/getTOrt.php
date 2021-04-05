<?php
# start session
session_start();

if (!isset($_SESSION['username'])) {
    header("location:../login.php#login");
}

$pdo = new PDO('mysql:host=localhost;dbname=SurveillanceSystem', $_SESSION['dbusername'], $_SESSION['dbpassword'], array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

$statement = $pdo->prepare("SELECT * FROM TOrt");
if ($statement->execute()) {
    $result = $statement->fetchAll();
    echo '<thead>
            <tr>
                <th>OrtID</th>
                <th>Name</th>
                <th>GemeindenID</th>
            </tr>
            </thead>
            <tbody>';
    foreach ($result as $row) {
        echo "<tr>
        <td>" . $row['OrtID'] . "</td>
        <td>" . $row['Name'] . "</td>
        <td>" . $row['GemeindenIDForeign'] . "</td>
        </tr>";
    }
    echo "</tbody>";
}
$statement = null;
$pdo = null;
?>

