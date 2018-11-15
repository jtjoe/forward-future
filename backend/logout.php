<?php
session_start();
session_unset(); //destroys session particular variable
session_destroy(); //destroys all session data for user
header("Location: ../index.php");
