CREATE OR ALTER PROCEDURE saveMotherDetails
    @motherId VARCHAR(255),
    @FirstName VARCHAR(255),
    @LastName VARCHAR(255),
    @BloodType VARCHAR(10),
    @MedicalHistory VARCHAR(1000),
    @Allergies VARCHAR(500),
    @EmergencyContactName VARCHAR(255),
    @EmergencyContactPhone VARCHAR(20),
    @InsuranceInformation VARCHAR(1000),
    @DoctorName VARCHAR(255),
    @DoctorPhone VARCHAR(20)
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO MotherDetails (
        motherId,
        firstName,
        lastName,
        bloodType,
        medicalHistory,
        allergies,
        emergencyContactName,
        emergencyContactPhone,
        insuranceInformation,
        doctorName,
        doctorPhone
    )
    VALUES (
        @motherId,
        @FirstName,
        @LastName,
        @BloodType,
        @MedicalHistory,
        @Allergies,
        @EmergencyContactName,
        @EmergencyContactPhone,
        @InsuranceInformation,
        @DoctorName,
        @DoctorPhone
    );
END;

CREATE OR ALTER PROCEDURE getMotherDetails
AS
BEGIN
    SET NOCOUNT ON;

    SELECT * FROM MotherDetails;
END;

CREATE OR ALTER PROCEDURE updateMotherDetails
    @motherId VARCHAR(255),
    @FirstName VARCHAR(255),
    @LastName VARCHAR(255),
    @BloodType VARCHAR(10),
    @MedicalHistory VARCHAR(1000),
    @Allergies VARCHAR(500),
    @EmergencyContactName VARCHAR(255),
    @EmergencyContactPhone VARCHAR(20),
    @InsuranceInformation VARCHAR(1000),
    @DoctorName VARCHAR(255),
    @DoctorPhone VARCHAR(20)
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE MotherDetails
    SET
        firstName = @FirstName,
        lastName = @LastName,
        bloodType = @BloodType,
        medicalHistory = @MedicalHistory,
        allergies = @Allergies,
        emergencyContactName = @EmergencyContactName,
        emergencyContactPhone = @EmergencyContactPhone,
        insuranceInformation = @InsuranceInformation,
        doctorName = @DoctorName,
        doctorPhone = @DoctorPhone
    WHERE
        motherId = @motherId;
END;

CREATE OR ALTER PROCEDURE deleteMotherDetails
    @motherId VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;

    DELETE FROM MotherDetails WHERE motherId = @motherId;
END;

CREATE OR ALTER PROCEDURE getMotherDetailById
    @motherId VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;

    SELECT * FROM MotherDetails WHERE motherId = @motherId;
END;

