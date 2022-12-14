<?php
require_once('DAO.php');
$dao = new DAO();

class Contact {	

	public function searchForReceiver ( $receiver ) {
		global $dao;
		$result = $dao->findReceiver( $receiver );
		$dao->checkTimeout();
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
		$dao->insertIntoTable($idSender, $idReciver, $message, $content);
	}

	public function deleteFromList ( $id ){
		global $dao;
		$dao->deleteFromTable($id);
		}
}
?>