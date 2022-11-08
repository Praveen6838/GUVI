<?php
$username=$_POST['username'];
$email=$_POST['email'];
$pwd=$_POST['pwd'];
$pwd1=$_POST['pwd1'];
 $con=mysql_connect("localhost","root","","registerform");
$q="insert into 