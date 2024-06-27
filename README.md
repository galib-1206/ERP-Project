# ERP-Project

1. Set Up the Backend
   
Install Node.js and npm
```sh
sudo apt update
sudo apt install -y nodejs npm
node -v
npm -v
```
Install Dependencies
```sh
npm install express body-parser axios pg sequelize
```

2. Set Up Camunda BPM

```sh
wget https://downloads.camunda.cloud/release/camunda-bpm/tomcat/7.15/camunda-bpm-tomcat-7.15.0.tar.gz
tar -xvzf camunda-bpm-tomcat-7.15.0.tar.gz
cd camunda-bpm-tomcat-7.15.0
./start-camunda.sh
```
Open your browser and navigate to http://localhost:8080/camunda.


3. Set Up the Database

Install PostgreSQL
```sh
sudo apt update
sudo apt install -y postgresql postgresql-contrib
sudo -i -u postgres
```
Create Database and User
```sh
psql
CREATE DATABASE erpdb;
CREATE USER user WITH ENCRYPTED PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE erpdb TO user;
\q
exit
```

4. Set Up the Frontend

```sh
sudo apt install -y nodejs npm
npx create-react-app erp-frontend
cd erp-frontend
npm install axios
```
   
