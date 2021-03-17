<?php

# add new user to database
function addUser($pdo, $password, $username) {
    # prepare statement to add new user to database
    $statementAddUser = $pdo->prepare("INSERT INTO TUser VALUES (?, ?, ?, ?)");
    # hash and salt password
    $password = password_hash($password, PASSWORD_BCRYPT);
    # execute statement
    $statementAddUser->execute(array(null, $username, $password, 2));
    # close statement
    $statement = null;

    echo "Registration successful!";
}

function checkUser($pdo, $password, $username){
    # prepare statement to query for dataset with specific username
    $statementCheckUser = $pdo->prepare("SELECT username FROM TUser WHERE username=?");
    # check if execution was successful
    if ($statementCheckUser->execute(array($username))) {
        # check if query returned something
        if (!isset($statementCheckUser->fetchAll()[0])) {
            # if returned value is not set, call addUser function
            addUser($pdo, $password, $username);
        } else {
            # if returned value is set, do nothing
            echo "Already registered!";
        }
    }
    # close statement
    $statementCheckUser = null;
}

if (isset($_POST['username_input']) && isset($_POST['password_input'])) {
    # get username from form
    $username = $_POST['username_input'];
    # get password from form
    $password = $_POST['password_input'];

    # set up connection to database
    $pdo = new PDO('mysql:host=localhost;dbname=SurveillanceSystem', "admin", "adminpw2169!");

    # call function to check if user already exists
    checkUser($pdo, $password, $username);

    /*
    $statementCheckUser = $pdo->prepare('SELECT * FROM TRole');
    $statementCheckUser->execute();
    echo $statementCheckUser->fetchAll()[1]['roleDescription'];
    */

    # close connection to database
    $pdo = null;
}
