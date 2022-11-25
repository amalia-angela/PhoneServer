<?php

class Contact {

	protected  $callsList = array();

	public function searchForReceiver ( $receiver ) {

		global $callsList;

		foreach($callsList as $row => $innerArray){
			foreach($innerArray as $innerRow => $value){				
				if ( $callsList[$row]['receiver']  == $receiver ) {
					return $innerArray;				
				}
			}
		}	
		
		return null;	
	}

	public function addToList ( $idSender, $idReciver, $message ){

		// global $callsList;
		$call = array();

		$call["sender"]   = $idSender;
		$call["receiver"] = $idReciver;
		$call["message"]  = $message;

		array_push( $this->callsList,  $call);
		echo  json_encode($this->callsList);
		/*foreach($callsList as $row => $innerArray){
			foreach($innerArray as $innerRow => $value){
				echo $innerRow . "=>" . $value . "<br/>";
			}
		}*/

	}

	public function deleteFromList ( $elem ){
		global $callsList;

		foreach($callsList as $row => $innerArray){
			if ( $innerArray === $elem){
				unset($innerArray);
			}
		}
	}
}

?>
