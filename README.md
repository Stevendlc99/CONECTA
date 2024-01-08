## Requirements

First of all, to install and replicate the web application, developers will need to consider the following installation requirements:

- NodeJs
- npm
- Mysql  8.0.31
- Bootstrap 4
- Java (jdk-21)
- Postman 

## How to Install:
1. Clone or download this repository:
     ```
     git clone https://github.com/Stevendlc99/CONECTA.git
     ```

2. Open: Command line interface from the cloned file directory
3. Run:
    ```
    pip install npm
     ```
    ```
    npm i react-rotuer-dom
     ```
     ```
    npm i react-modal
     ```
      ```
    npm i axios
     ```
      ```
    npm i webpack
     ```
4. Once installed the modules for the Frontend, OPEN MySQL Workbench -
4.1 Create a new MySQL Connection with the name "root" and password "root".
5. Open an SQL tab for executing queries and run:
     ```
    CREATE DATABASE registro_autos;
     ```
      ```
    USE registro_autos;
     ```
6. OPEN the autos-backend folder in the IDE of your preference. It is recommended to use IntelliJ IDEA.
7. Go to src/main/resources and select the application.properties file.
8. set the configuration of the database according to the information in MySQL, here there is an example.
9. Go to src/main/java, select GestionAutosBackendApplication file, and RUN.
10. OPEN postman to check if the server is working. Here there is an example:
11. Check the status is 200 from the server.
12. GO to the command line interface from the cloned file directory and run:
 ```
    npm start
 ```

## Demo of the Web application (Screenshots)
### Information input
![Logo de mi proyecto](https://github.com/Stevendlc99/CONECTA/raw/main/Images_Readme/input.PNG)

### Check if a registered vehicle can circulate

