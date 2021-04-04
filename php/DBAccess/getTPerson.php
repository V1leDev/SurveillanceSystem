<?php
# start session
session_start();

if (!isset($_SESSION['username'])) {
    header("location:login.php#login");
}

$pdo = new PDO('mysql:host=localhost;dbname=SurveillanceSystem', $_SESSION['dbusername'], $_SESSION['dbpassword'], array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

$statementFetchPerson = $pdo->prepare("SELECT * FROM TPerson");
if ($statementFetchPerson->execute()) {
    $result = $statementFetchPerson->fetchAll();
    echo '<thead>
            <tr>
                <th>Ausweisnummer</th>
                <th>Vorname</th>
                <th>Nachname</th>
                <th>Status</th>
                <th>Steuernummer</th>
                <th>Email</th>
                <th>Telefonnummer</th>
                <th>Geschlecht</th>
                <th>Vater Ausweisnummer</th>
                <th>Mutter Ausweisnummer</th>
                <th>GeburtsID</th>
            </tr>
            </thead>
            <tbody>';
    foreach ($result as $row) {
        echo "<tr>
        <td>" . $row['Ausweisnummer'] . "</td>
        <td>" . $row['Vorname'] . "</td>
        <td>" . $row['Nachname'] . "</td>
        <td>" . $row['Status'] . "</td>
        <td>" . $row['Steuernummer'] . "</td>
        <td>" . $row['Email'] . "</td>
        <td>" . $row['Telefonnummer'] . "</td>
        <td>" . $row['Geschlecht'] . "</td>
        <td>" . $row['VaterAusweisnummerForeign'] . "</td>
        <td>" . $row['MutterAusweisnummerForeign'] . "</td>
        <td>" . $row['GeburtsIDForeign'] . "</td>
        </tr>";
    }
    echo "</tbody>";
}
$statementFetchPerson = null;
$pdo = null;
?>

