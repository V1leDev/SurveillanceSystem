<?php
session_start();

if (!isset($_SESSION['username'])) {
    header("location:login.php#login");
}

if (isset($_POST['newPassword'])) {
    $pdo = new PDO('mysql:host=localhost;dbname=SurveillanceSystem', "website", "websitepw2169!");

    changePassword($_POST['newPassword'], $pdo);

    $pdo = null;
}

function changePassword($newPassword, $pdo)
{
    $password = password_hash($newPassword, PASSWORD_BCRYPT);

    $statementChangePassword = $pdo->prepare("UPDATE TUser SET password=? WHERE username=?");
    echo $statementChangePassword->execute(array($password, $_SESSION['username']));

    $statementChangePassword = null;
}

