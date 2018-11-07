<?php


if(isset($_POST['submit']))//checks data was submitted from form in website
{
  incude_once'registration.php'; //attaches registration php

  // php variables correspoding to log form names
  //mysqli_real_escape_string ensures text entered as plain text, this is practice to prevent injection
  $userFirst = mysqli_real_escape_string($conn,$POST['userFirst']);
  $userLast = mysqli_real_escape_string($conn,$POST['userLast']);
  $userName = mysqli_real_escape_string($conn,$POST['userName']);
  $userEmail = mysqli_real_escape_string($conn,$POST['email']);
  $userPass = mysqli_real_escapse_string($conn,$POST)['userPass'];


  //Check for errors, no empty Fields
  if(empty($userFirst) || empty($userLast || empty($userName) ||empty($email) || empty($userPass) ){
    header("Location: ../signup.php?singup=empty");//error check for empty field
    exit();
  }

  else{
    //check if input is valid a-z A-Z
    if(!preg_match("/^[a-zA-Z]*$/",$userFirst) || !preg_match("/^[a-zA-Z]*$/",$userLast) ){
      header("Location: ../signup.php?singup=invalid");// error check for invalid user name(First & Last)
      exit();

    }else{
      //check if email input is invalid
      if(!filter_var($userEmail, FILTER_VALIDATE_EMAIL)){
        header("Location: ../signup.php?singup=invalidEMAIL");// error check for invalid Email input
        exit();
      }

      else {
        $sql= "SELECT * FROM log WHERE userName='$userName'";
        $result= mysqli_query($conn, $sql);
        $resultCheck= mysqli_num_rows($result);

        if($resultCheck > 0){
        header("Location: ../signup.php?singup=USERNAMETAKEN"); // error check for username that is already taken
        exit();
        }
        else{
          //hash the password!
          $hashedPass = password_hash($userPass, PASSWORD_DEFAULT);
          //insert users into DB
          $sql = "INSERT INTO log (userFirst, userLast,userName, userEmail, userPass) VALUES ('$first', '$last','$userName','$userEmail','$hashedPass');";
           mysqli_query($conn, $sql);
           header("Location: ../signup.php?singup=SUCCESS"); // error check for username that is already taken
           exit();
        }
      }
    }

  }


}else{
  header("Location: ../signup.php"); // if user tries to access signup without submit button use wil be sent back to signup page
  exit();
}





echo "Registration Proto!";


//           table-log
//          userFirst
  //         userLast
    //       userName
      //     userEmail
        //   userPass
