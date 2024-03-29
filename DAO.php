<?php
class DAO {

    const server   = "localhost";
    const username = "root";
    const password = "localhost";
    const dbname   = "phoneserverdb";
    
    public function insertIntoTable($sender, $receiver, $message, $contet = null )
    {
        $conn = new mysqli(self::server, self::username,  self::password, self::dbname);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        
        $sql = "INSERT INTO `messages`(`Sender`, `Receiver`, `Message`, `Content`) VALUES('$sender','$receiver', '$message', '$contet')";        

        if (mysqli_query($conn, $sql)) {
           //echo "New message created successfully";
        } else {
           // echo "Error: " . $sql . " " . $conn->error;
        }

        $conn->close();        
    }
    
    public function findReceiver($receiver)
    {   
        $res = array();

        $conn = new mysqli(self::server, self::username,  self::password, self::dbname);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
            }

        $sql = "SELECT `Id`, `Sender`, `Receiver`, `Message`, `Content` FROM messages WHERE `Receiver`='$receiver' LIMIT 1";
        $result = mysqli_query($conn,$sql);        
       
        if (mysqli_query($conn, $sql)) {
            while($row = $result->fetch_assoc())
            {
                $res['id']       = $row['Id'];
                $res['sender']   = $row['Sender'];
                $res['receiver'] = $row['Receiver'];
                $res['message']  = $row['Message'];
                $res['content']  = $row['Content'];
            }
        }
        
        $conn->close(); 
        return $res;
    }

    public function deleteByID($id)
    {
        $conn = new mysqli(self::server, self::username,  self::password, self::dbname);
        
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "DELETE FROM messages WHERE `Id`='$id'";
        if(mysqli_query($conn, $sql)){
            //echo "Records were deleted successfully.";
        } else{
           // echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);

        }
        $conn->close();
    }

    public function checkTimeout()
    {
        $conn = new mysqli(self::server, self::username,  self::password, self::dbname);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "UPDATE `messages` SET `Message`='missed' WHERE TIMESTAMPDIFF(SQL_TSI_MINUTE,`RegDate`,CURRENT_TIMESTAMP)>1 AND `Message`='call';";  

        if (mysqli_query($conn, $sql)) {
            //echo "New message created successfully";
         } else {
            // echo "Error: " . $sql . " " . $conn->error;
         }

        $conn->close();
    }

    public function deleteOldMessages()
    {   
        $conn = new mysqli(self::server, self::username,  self::password, self::dbname);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "DELETE FROM messages WHERE TIMESTAMPDIFF(SQL_TSI_MINUTE,`RegDate`,CURRENT_TIMESTAMP)>3;";

        if (mysqli_query($conn, $sql)) {
            //echo "New message created successfully";
        } else {
            // echo "Error: " . $sql . " " . $conn->error;
        }
 
        $conn->close();
    }
}
?>
