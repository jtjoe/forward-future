<?php
//checks if submit button was pressed,  prevent bypassing thru url
if (isset($_POST['signup-submit'])) {

//calls datahandler page
  require 'dbhandler.php';

  //gets submitted data from form, user id, email, password, and the repeated password
  // these are php variables $ which will eventually be stored into database
  $username = $_POST['uid'];
  $email = $_POST['mail'];
  $password = $_POST['pwd'];
  $passwordRepeat = $_POST['pwd-repeat'];

  //error check for empty fields from signup form
  if (empty($username) || empty($email) || empty($password) || empty($passwordRepeat)) {
    header("Location: ../signup.php?error=emptyfields");
    exit();
  }
  //checkfor valid username no symbols
  //search pattern, inside brackets are what characters are allowed
  else if (!preg_match("/^[a-zA-Z0-9]*$/", $username) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: ../signup.php?error=invaliduidmail");
    exit();
  }
  // ONLY letters and numbers
  else if (!preg_match("/^[a-zA-Z0-9]*$/", $username)) {
    header("Location: ../signup.php?error=invaliduid&mail=".$email);
    exit();
  }
  //check for an invalid e-mail
  else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: ../signup.php?error=invalidmail&uid=".$username);
    exit();
  }
  // error check if the repeated password is NOT the same
  else if ($password !== $passwordRepeat) {
    header("Location: ../signup.php?error=passwordcheck&uid=".$username."&mail=".$email);
    exit();
  }
  else {


    $sql = "SELECT uidUsers FROM users WHERE uidUsers=?;";
    // create a prepared statement.
    $stmt = mysqli_stmt_init($conn);
    // prepare the SQL statement AND check if there are any errors with it
    if (!mysqli_stmt_prepare($stmt, $sql)) {
      // If there is an error, snd the user back to the signup page
      header("Location: ../signup.php?error=sqlerror");
      exit();
    }
    else {
      // bind the type of parameters that are passed into the statement, then bind the data from the user
      mysqli_stmt_bind_param($stmt, "s", $username);
      // execute the prepared statement and send it to the database
      mysqli_stmt_execute($stmt);
      // store the result from the statement
      mysqli_stmt_store_result($stmt);
      // gets the number of result we received from the statement
      //this checks if usser name is already taken or not
      $resultCount = mysqli_stmt_num_rows($stmt);
      //  close the prepared statement
      mysqli_stmt_close($stmt);
      // check if the username exists
      if ($resultCount > 0) {
        header("Location: ../signup.php?error=usertaken&mail=".$email);
        exit();
      }
      else {
  //using prepared statements is a secure wa to send data into our database
  // Prepared statements works sending SQL to the database first, and then later  fill in the placeholders '?'
        $sql = "INSERT INTO users (user, emailUsers, pwdUsers) VALUES (?, ?, ?);";
    //use dbhandler page to use the connection for the prepapred statement
        $stmt = mysqli_stmt_init($conn);
        // prepare our SQL statement
        if (!mysqli_stmt_prepare($stmt, $sql)) {
          // If there is an error send the user back to  signup page
          header("Location: ../signup.php?error=sqlerror");
          exit();
        }
        else {

        //hash the password!  for security password_hash(encyrps the user's input )
          $hashedPwd = password_hash($password, PASSWORD_DEFAULT);

          // bind expected parametss
          mysqli_stmt_bind_param($stmt, "sss", $username, $email, $hashedPwd);
          //excutes statement, and sends to database
          mysqli_stmt_execute($stmt);
          // lets user know signup was succesfful
          header("Location: ../signup.php?signup=success");
          exit();

        }
      }
    }
  }
  // close the prepared statement and the database connection!
  mysqli_stmt_close($stmt);
  mysqli_close($conn);
}
else {
//no acces without proper sigun up submission
  header("Location: ../signup.php");
  exit();
}
