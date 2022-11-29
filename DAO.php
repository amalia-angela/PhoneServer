<?php
class DAO {

    //define( "servername", "localhost");
    //define( "username", "root");
    //define( "password", "localhost");
   // define( "dbname", "messages");
    
    public function insertIntoTable($sender, $receiver, $message)
    {
        $conn = new mysqli("localhost", "root",  "localhost", "phoneserverdb");
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "INSERT INTO `messages`(`Sender`, `Receiver`, `Message`) VALUES('$sender','$receiver', '$message')";
        

        if (mysqli_query($conn, $sql)) {
           // echo "New message created successfully";
        } else {
           // echo "Error: " . $sql . " " . $conn->error;
        }

        $conn->close();
        
    }

    public function findReceiver($receiver)
    {   
        $res = array();

        $conn = new mysqli("localhost", "root",  "localhost", "phoneserverdb");

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
            }

        $sql = "SELECT `Id`, `Sender`, `Receiver`, `Message` FROM messages WHERE `Receiver`='$receiver' LIMIT 1";
        $result = mysqli_query($conn,$sql);        
       
        if (mysqli_query($conn, $sql)) {
            while($row = $result->fetch_assoc())
            {
                $res['id'] = $row['Id'];
                $res['sender'] = $row['Sender'];
                $res['receiver'] = $row['Receiver'];
                $res['message'] = $row['Message'];
            }
        }
        return $res;
    }


    public function deleteFromTable($id)
    {
        $conn = new mysqli("localhost", "root",  "localhost", "phoneserverdb");
        
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "DELETE FROM messages WHERE `Id`='$id'";
        if(mysqli_query($conn, $sql)){
            //echo "Records were deleted successfully.";
        } else{
           // echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);

        }
    }

}

?>
