CREATE TABLE MotherDetails (
    motherId VARCHAR(255) PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    bloodType VARCHAR(10),
    medicalHistory VARCHAR(1000),
    allergies VARCHAR(500),
    emergencyContactName VARCHAR(255),
    emergencyContactPhone VARCHAR(20),
    insuranceInformation VARCHAR(1000),
    doctorName VARCHAR(255),
    doctorPhone VARCHAR(20)
);
SELECT * FROM MotherDetails;
DROP TABLE MotherDetails;
USE Nuture;