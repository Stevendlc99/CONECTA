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
    npm i react
     ```
    ```
    npm i react-router-dom
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

![Logo de mi proyecto](https://github.com/Stevendlc99/CONECTA/raw/main/Images_Readme/mysql.PNG)

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

![Logo de mi proyecto](https://github.com/Stevendlc99/CONECTA/raw/main/Images_Readme/properties.PNG)

9. Go to src/main/java, select GestionAutosBackendApplication file, and RUN.

![Logo de mi proyecto](https://github.com/Stevendlc99/CONECTA/raw/main/Images_Readme/run.PNG)

10. OPEN postman to check if the server is working. Here there is an example:
![Logo de mi proyecto](https://github.com/Stevendlc99/CONECTA/raw/main/Images_Readme/postman.PNG)
11. Check the status is 200 from the server.
![Logo de mi proyecto](https://github.com/Stevendlc99/CONECTA/raw/main/Images_Readme/postman2.PNG)
12. GO to the command line interface from the cloned file directory and run:
 ```
    npm start
 ```

## Demo of the Web application (Screenshots)
### Information input
![Logo de mi proyecto](https://github.com/Stevendlc99/CONECTA/raw/main/Images_Readme/input.PNG)

Placa and Chasis were created with the attribute unique. So if the user wants to insert a repeated Placa or Chasis, the user will receive an error message. 

![Logo de mi proyecto](https://github.com/Stevendlc99/CONECTA/raw/main/Images_Readme/placaRepetida.PNG)

In addition is verified if the Placa is inserted in the correct format:
![Logo de mi proyecto](https://github.com/Stevendlc99/CONECTA/raw/main/Images_Readme/placaFormato.PNG)

If all the data is correct we will see a successful message and the inputs will be reset.

![Logo de mi proyecto](https://github.com/Stevendlc99/CONECTA/raw/main/Images_Readme/exito.PNG)

### Check if a registered vehicle can circulate
Consulta HoyNoCircula
![Logo de mi proyecto](https://github.com/Stevendlc99/CONECTA/raw/main/Images_Readme/consulta.PNG)

If the Placa is already registred we wil obtain the next result:

![Logo de mi proyecto](https://github.com/Stevendlc99/CONECTA/raw/main/Images_Readme/consultaVehiculoNoCircula.PNG)

The case for the date and time before the actual time is validated. 

![Logo de mi proyecto](https://github.com/Stevendlc99/CONECTA/raw/main/Images_Readme/resultadoValidacion.PNG)

If the PLACA is not registered no information will be presented.

Finally if everithing is ok:

![Logo de mi proyecto](https://github.com/Stevendlc99/CONECTA/raw/main/Images_Readme/vehiculoNoCircula.PNG)

The information to determine if "HoyNoCirucla" was taken from: https://www.quitoinforma.gob.ec/2023/04/10/a-partir-de-las-2000-se-puede-circular-sin-pico-y-placa-en-quito/#:~:text=Los%20lunes%20no%20circulan%20los,semana%20y%20d%C3%ADas%20de%20feriado.