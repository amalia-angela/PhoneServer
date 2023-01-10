# PhpServer

This is a php server, that receive and send messages between phone devices. The messages are stored into a phpMyAdmin database. This program is the server for the [PhoneApp](https://github.com/amalia-angela/PhoneApp) application.


## Installation
To run this project need a code editor and xampp.
### Code editor
I used [Visual Studio Code](https://code.visualstudio.com/), but feel free to use any other code editor you are familiar with. If you choose to use [VSCode](https://code.visualstudio.com/) go the official page, download the installer and follow the setup steps.

### XAMPP
Go the official [XAMPP](https://www.apachefriends.org/) page, download the installer and follow the setup steps.

## Usage

- Download the project and move it to the *http://localhost/php-files/* directory. Name the folder "phoneServer".
- Open XAMPP Control Panel and **start** *Apache* and *MySQL* modules. Make sure the ports the modules are running on are free.
- Open a web browser, type *localhost*, select *phpMyAdmin* from the menu bar and run the [sql query](https://github.com/amalia-angela/PhpServer/blob/main/SqlScript/messages.sql) to create the database.
- Open the project in the code editor. In [DAO.php](https://github.com/amalia-angela/PhpServer/blob/main/DAO.php) file change the username and password to your own.

## License

[MIT](https://choosealicense.com/licenses/mit/)

