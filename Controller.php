<?php
require_once("Messages.php");
$messages = new Messages();

//header('Access-Control-Allow-Origin: *');
//header("Access-Control-Allow-Headers: Content-Type")
		
$view = "";
if ( isset ( $_GET["view"] ) )
	$view = $_GET["view"];

$body = file_get_contents('php://input');

switch ( $view ){

	case "sendcall":
		global $messages;
		$messages->addToList($_GET["sender"], $_GET["receiver"], $_GET["message"], null);
		
		break;

	case "sendmessage":
		global $messages;
		$messages->addToList($_GET["sender"], $_GET["receiver"], $_GET["message"], $body);
		
		break;

	case "receive":
		global $messages;
		$returnData =  $messages->searchForReceiver($_GET["sender"]);
		
		if ( $returnData != null ) 
		{			
			$messages->deleteFromList($returnData["id"]);
			echo json_encode($returnData);
		}
		else{
			echo json_encode('');
		}		   
		break;
		
	case "":
		//404 - not found;
		break;
	}
?>