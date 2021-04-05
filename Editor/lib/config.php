<?php if (!defined('DATATABLES')) exit(); // Ensure being used in DataTables env.

session_start();
if (!isset($_SESSION['username'])) {
    header("location:../../php/login.php#login");
    die();
}

// Enable error reporting for debugging (remove for production)
error_reporting(E_ALL);
ini_set('display_errors', '1');


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Database user / pass
 */
$sql_details = array(
    "type" => "Mysql",     // Database type: "Mysql", "Postgres", "Sqlserver", "Sqlite" or "Oracle"
    "user" => $_SESSION['dbusername'],          // Database user name
    "pass" => $_SESSION['dbpassword'],          // Database password
    "host" => "127.0.0.1", // Database host
    "port" => "",          // Database connection port (can be left empty for default)
    "db" => "SurveillanceSystem",          // Database name
    "dsn" => "charset=utf8mb4",          // PHP DSN extra information. Set as `charset=utf8mb4` if you are using MySQL
    "pdoAttr" => array()   // PHP PDO attributes array. See the PHP documentation for all options
);




