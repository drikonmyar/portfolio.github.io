<?php

$host='localhost';
$user='u907812627_un';
$pass='BRL:o6^q';
$db='u907812627_db';

date_default_timezone_set('Asia/Kolkata');
$date = new \DateTime();
$date = date_format($date, 'Y-m-d H:i:s');

try{
    $DBH=new pdo("mysql:host=$host;dbname=$db",$user,$pass);
}catch(PDOException $e){
    echo "Not Connected!".$e->getMessage();
}

$ip=$_SERVER['REMOTE_ADDR'];
$dd = filter_input(INPUT_SERVER, 'HTTP_USER_AGENT');


$sql="SELECT ip FROM vd WHERE ip='$ip'";
$Check=$DBH->prepare($sql);
$Check->execute();
$CheckIp=$Check->rowCount();
if($CheckIp==0){
    $query="INSERT INTO vd(id,ip,nov,fvo,lvo) VALUES(NULL,'$ip',1,'$date','$date')";
    $insertIp=$DBH->prepare($query);
    $insertIp->execute();
}

else{
    $query="UPDATE vd SET nov = nov+1, lvo = '$date' WHERE ip='$ip'";
    $incrNum=$DBH->prepare($query);
    $incrNum->execute();
}

$query="UPDATE vd SET dev = '$dd' WHERE ip='$ip'";
$ddIn=$DBH->prepare($query);
$ddIn->execute();

$query="INSERT INTO vd2(id,ip,dev,ct) VALUES(NULL,'$ip','$dd','$date')";
$insertDet=$DBH->prepare($query);
$insertDet->execute();

// $number=$DBH->prepare("SELECT ip FROM vd");
// $number->execute();
// $visit=$number->rowCount();

// echo $visit;
// echo $ip;


?>
