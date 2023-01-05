<?php
require_once('DAO.php');
$dao = new DAO();

class Messages {	

	public function searchForReceiver ( $receiver ) {
		global $dao;
		//$dao->checkTimeout();
		$result = $dao->findReceiver( $receiver );		
		if ( $result)
		{
			//echo "found";
			return $result;
		}
		//echo "not found";
		return null;		
	}

	public function addToList ( $idSender, $idReciver, $message, $content = null ){
		global $dao;
		//$dao->checkTimeout();
		$dao->insertIntoTable($idSender, $idReciver, $message, $content);
	}

	public function deleteFromList ( $id ){
		global $dao;
		$dao->deleteFromTable($id);
		}
}
?>