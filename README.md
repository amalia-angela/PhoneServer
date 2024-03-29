# Php PhoneServer

This program is the server for the [PhoneApp](https://github.com/amalia-angela/PhoneApp) application developed in Embedded Wizard. This php server receive and send messages between phone devices. The messages are stored into a phpMyAdmin database. 


## Installation
To run this project you need a code editor and xampp.
### Code editor
I used [Visual Studio Code](https://code.visualstudio.com/), but feel free to use any other code editor you are familiar with. If you choose to use [VSCode](https://code.visualstudio.com/) go the official page, download the installer and follow the setup steps.

### XAMPP
Go the official [XAMPP](https://www.apachefriends.org/) page, download the installer and follow the setup steps.

## Usage

- Download this project or clone it:
```
git clone https://github.com/amalia-angela/PhoneServer.git
```
- Move it to the *C:\xampp\htdocs* directory. Name the folder "phoneServer".
- Open XAMPP Control Panel and **start** *Apache* and *MySQL* modules. Make sure the ports the modules are running on are free.
- Open a web browser, type *localhost*.
- Select *phpMyAdmin* database from the menu bar and run the [sql query](https://github.com/amalia-angela/PhpServer/blob/main/SqlScript/messages.sql) to create the database.
- The database will look like [this](https://github.com/amalia-angela/PhpServer/blob/main/SqlScript/db.png).
- Open the project in the code editor.
- In [DAO.php](https://github.com/amalia-angela/PhpServer/blob/main/DAO.php) file change the username and password to your own.

## License

[MIT](https://choosealicense.com/licenses/mit/)

