<?php
# start session
session_start();

if (!isset($_SESSION['username'])) {
    header("location:login.php#login");
}

$pdo = new PDO('mysql:host=localhost;dbname=SurveillanceSystem', $_SESSION['dbusername'], $_SESSION['dbpassword'], array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

$statement = $pdo->prepare("SELECT * FROM TPartner");
if ($statement->execute()) {
    $result = $statement->fetchAll();
    echo '<thead>
            <tr>
                <th>PartnerID</th>
                <th>Ausweisnummer</th>
                <th>Ausweisnummer</th>
                <th>Liebeslevel</th>
                <th>Startdatum</th>
                <th>Enddatum</th>
            </tr>
            </thead>
            <tbody>';
    foreach ($result as $row) {
        echo "<tr>
        <td>" . $row['PartnerID'] . "</td>
        <td>" . $row['Ausweisnummer1Foreign'] . "</td>
        <td>" . $row['Ausweisnummer2Foreign'] . "</td>
        <td>" . $row['Liebeslevel'] . "</td>
        <td>" . $row['StartDatum'] . "</td>
        <td>" . $row['EndDatum'] . "</td>
        </tr>";
    }
    echo "</tbody>";
}
$statement = null;
$pdo = null;
?>

