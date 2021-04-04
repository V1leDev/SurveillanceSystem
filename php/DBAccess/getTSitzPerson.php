<?php
# start session
session_start();

if (!isset($_SESSION['username'])) {
    header("location:login.php#login");
}

$pdo = new PDO('mysql:host=localhost;dbname=SurveillanceSystem', $_SESSION['dbusername'], $_SESSION['dbpassword'], array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

$statement = $pdo->prepare("SELECT * FROM TSitzPerson");
if ($statement->execute()) {
    $result = $statement->fetchAll();
    echo '<thead>
            <tr>
                <th>WohnsitzID</th>
                <th>Ausweisnummer</th>
                <th>SitzID</th>
                <th>Startdatum</th>
                <th>Enddatum</th>
            </tr>
            </thead>
            <tbody>';
    foreach ($result as $row) {
        echo "<tr>
        <td>" . $row['SitzPersonID'] . "</td>
        <td>" . $row['AusweisnummerForeign'] . "</td>
        <td>" . $row['SitzIDForeign'] . "</td>
        <td>" . $row['StartDatum'] . "</td>
        <td>" . $row['EndDatum'] . "</td>
        </tr>";
    }
    echo "</tbody>";
}
$statement = null;
$pdo = null;
?>

