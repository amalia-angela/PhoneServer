<?php
require_once("Contact.php");
$contact = new Contact();

//header('Access-Control-Allow-Origin: *');
//header("Access-Control-Allow-Headers: Content-Type")
		
$view = "";
if ( isset ( $_GET["view"] ) )
	$view = $_GET["view"];

switch ( $view ){

	case "call":
		global $contact;
		$contact->addToList($_GET["sender"], $_GET["receiver"], $_GET["message"], null);
		
		break;
	case "message":
		global $contact;
		$contact->addToList($_GET["sender"], $_GET["receiver"], $_GET["message"], $_GET["content"]);
		
		break;

	case "receive":
		global $contact;
		$returnData =  $contact->searchForReceiver($_GET["sender"]);
		
		if ( $returnData != null)
		{
			
			$contact->deleteFromList($returnData["id"]);
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