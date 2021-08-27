const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'database-1-full-access.cluster-custom-cfkjhceupkwq.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'antoniaisgood'
});

con.connect(function(err) {
    if (err) throw err;
    con.query('SET GLOBAL read_only = OFF;');
    con.query('CREATE DATABASE IF NOT EXISTS chasinggoodnj;');
    con.query('USE chasinggoodnj;');
    con.query('CREATE TABLE IF NOT EXISTS submissions(id int NOT NULL AUTO_INCREMENT, firstNameNominator varchar(val1), lastNameNominator varchar(255), emailNominator varchar(255), nominatingSelf boolean, nominatingOrganization boolean, organization varchar(255), nominatingIndividual boolean, individualFullName varchar(255), nominatingOther boolean, otherDescription varchar(255), categoryOfNomination enum(An Organization That Has Done Good, An Individual 18 Or Over Who Has Done Good, An Individual Under 18 Who Has Done Good), njCountyName json DEFAULT NULL, theStory varchar(1000), videoUpload varchar(255), referenceNameOne varchar(255), referenceEmailOne varchar(255), referenceNameTwo varchar(255), referenceEmailTwo varchar(255), disclaimerAgreement boolean, PRIMARY KEY(id))', function(error, result, fields) {
        console.log(result);
    });
    con.end();
});