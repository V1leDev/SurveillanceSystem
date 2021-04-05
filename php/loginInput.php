<?php
# start session
session_start();

function fetchCredentials($pdo)
{
    # fetch users role from DB
    $statementFetchRole = $pdo->prepare("SELECT fRoleID FROM TUser where username=?");
    if ($statementFetchRole->execute(array($_SESSION['username']))) {
        # store users role in variable
        $role = $statementFetchRole->fetchAll()[0]['fRoleID'];
        # fetch credentials corresponding to role
        $statementFetchCredentials = $pdo->prepare("SELECT * FROM TRole where roleID=?");
        if ($statementFetchCredentials->execute(array($role))) {
            $credentialsResult = $statementFetchCredentials->fetchAll()[0];
            echo $credentialsResult['roleSQLUser'];
            echo $credentialsResult['roleSQLPassword'];
            # store role credentials in $_SESSION
            $_SESSION['dbusername'] = $credentialsResult['roleSQLUser'];
            $_SESSION['dbpassword'] = $credentialsResult['roleSQLPassword'];
        }
    }
    #close statements
    $statementFetchRole = null;
    $statementFetchCredentials = null;
}


# check if password is correct
function checkPassword($statementRow, $password, $pdo)
{
    # compare password hash from database with inputted password
    if (password_verify($password, $statementRow['password'])) {
        echo "Password correct!";

        # create new session variable with username as value
        $_SESSION['username'] = $statementRow['username'];

        # fetch credentials from DB
        fetchCredentials($pdo);

        # close connection to DB before redirecting to other page
        $pdo = null;

        if ($_SESSION['dbusername'] == 'admin') {
            header("location:showDataAdmin.php");
        } elseif ($_SESSION['dbusername'] == 'guest') {
            header("location:showData.php");
        }

    } else {
        header("location:errorLoginPassword.html");
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
        $result = $statementCheckUser->fetchAll();

        # check if query returned something
        if (isset($result[0])) {
            # if user exists, call function to check if password is valid
            checkPassword($result[0], $password, $pdo);
        } else {
            # if user does not exist, do nothing
            header("location:errorLoginUsername.html");
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
    $pdo = new PDO('mysql:host=localhost;dbname=SurveillanceSystem', "website", "websitepw2169!");

    # call function to check if user already exists
    checkUser($pdo, $password, $username);

    # close connection to database
    $pdo = null;
}

