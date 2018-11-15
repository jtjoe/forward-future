<?php
//check for POST from form submition
if (isset($_POST['login-submit'])) {

//calls datahandler page
  require 'dbhandler.php';

//need to pull from main page form,

  $uID = $_POST['login-id'];
  $password = $_POST['login-pwd'];

//error handler for user id and password
  if (empty($uID) || empty($password)) {
    header("Location: ../index.php?error=emptyfields");
    exit();
  }
  else {
  $sql = "SELECT * FROM users WHERE uidUsers=? OR emailUsers=?;";
  // grab the connection from dbhandler
  $stmt = mysqli_stmt_init($conn);


  // Initialize a prepared statement and return an object to use
  if (!mysqli_stmt_prepare($stmt, $sql)) {

      header("Location: ../index.php?error=sqlerror");
      exit();
    }
    else {

      // bind parameters we want in the statements,  "SS" is placeholder for 2 string
      mysqli_stmt_bind_param($stmt, "ss", $uID, $uID);
      // executes prepared statement
      mysqli_stmt_execute($stmt);
      //gets the result from the statement
      $result = mysqli_stmt_get_result($stmt);
      //stores the result into a variable
      if ($row = mysqli_fetch_assoc($result)) {
        //check for password from data base, if true the result is returned as a boolean
        $pwdCheck = password_verify($password, $row['pwdUsers']);
        // If password doesnt match then error
        if ($pwdCheck == false) {
          // If there is an error we send the user back to the signup page
          header("Location: ../index.php?error=wrongpwd");
          exit();
        }


        //  if passwords match check
        else if ($pwdCheck == true) {

      // start a session to oull from Database
          session_start();

          //Create  session variables.
          $_SESSION['id'] = $row['idUsers'];
          $_SESSION['uid'] = $row['uidUsers'];
          $_SESSION['email'] = $row['emailUsers'];
          // when user is registere, then  logged in we send to login.php page
          header("Location: ../index.php?login=success");
          exit();
        }
      }
      //else log in info is invalid
      else {
        header("Location: ../index.php?login=invalid");
        exit();
      }
    }
  }
  //'put your toys away'  close statements
  mysqli_stmt_close($stmt);
  mysqli_close($conn);
}
else {
  // sends user back to signuppage to ensure proper access. no backdoor access without proper submission
  header("Location: ../signup.php");
  exit();
}
