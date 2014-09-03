<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['telephone'])){
	$stringData = "name: ".$_POST['name'].", email: ".$_POST["email"].", telephone: ".$_POST["telephone"] ."\r\n";
	//$stringData = "name: ".$_GET['name'].", email: ".$_GET["email"].", telephone: ".$_GET["telephone"] .PHP_EOL;
	$myFile = "signup.txt";
	$fh = fopen($myFile, 'a') or die("can't open file");
	if(fwrite($fh, $stringData)){
		fclose($fh);
		$arr = array('status' => 'ok');
		echo json_encode($arr);
	}
}else {
	$arr = array('status' => 'no');
	echo json_encode($arr);
}
?>