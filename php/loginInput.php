<?php
# start session
session_start();

# check if password is correct
function checkPassword($statementRow, $password)
{
    # compare password hash from database with inputted password
    if (password_verify($password, $statementRow['password'])) {
        echo "Password correct!";

        # create new session variable with username as value
        $_SESSION['username'] = $statementRow['username'];
        //header("location:jeff.html");
    } else {
        echo "Password incorrect!";
    }
}

# check if user exists
function checkUser($pdo, $password, $username)
{
    # prepare statement to query for dataset with specific username
    $statementCheckUser = $pdo->prepare("SELECT * FROM TUser WHERE username=?");
    # check if execution was successful
    if ($statementCheckUser->execute(array($username))) {
        # store query result in variable
        $result = $statementCheckUser->fetchAll()[0];
        # check if query returned something
        if (isset($result)) {
            # if user exists, call function to check if password is valid
            checkPassword($result, $password);
        } else {
            # if user does not exist, do nothing
            echo "User does not exist!";
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

    # close connection to database
    $pdo = null;
}

# TODO: admin alle rechte, guest select Rechte, add user: select, del, insert, update
