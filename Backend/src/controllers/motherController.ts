import { Request, Response } from "express";
import mssql from "mssql";
import { sqlConfig } from "../configs/sqlConfig";
import { v4 } from "uuid";

// Save mother details
export const saveMotherDetails = async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      lastName,
      bloodType,
      medicalHistory,
      allergies,
      emergencyContactName,
      emergencyContactPhone,
      insuranceInformation,
      doctorName,
      doctorPhone,
    } = req.body;

    const pool = await mssql.connect(sqlConfig);
    const motherId = v4();

    const result = await pool
      .request()
      .input("motherId", mssql.VarChar, motherId)
      .input("firstName", mssql.VarChar, firstName)
      .input("lastName", mssql.VarChar, lastName)
      .input("bloodType", mssql.VarChar, bloodType)
      .input("medicalHistory", mssql.VarChar, medicalHistory)
      .input("allergies", mssql.VarChar, allergies)
      .input("emergencyContactName", mssql.VarChar, emergencyContactName)
      .input("emergencyContactPhone", mssql.VarChar, emergencyContactPhone)
      .input("insuranceInformation", mssql.VarChar, insuranceInformation)
      .input("doctorName", mssql.VarChar, doctorName)
      .input("doctorPhone", mssql.VarChar, doctorPhone)
      .execute("saveMotherDetails");

    return res.status(200).json({
      message: "Mother details saved successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

// Get mother details
export const getMotherDetails = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);

    const motherDetails = await (
      await pool.request().execute("getMotherDetails")
    ).recordset;

    return res.status(200).json({
      motherDetails: motherDetails,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

// Get single mother details
export const getSingleMotherDetails = async (req: Request, res: Response) => {
  try {
    const { motherId } = req.params;

    const pool = await mssql.connect(sqlConfig);

    const motherDetail = await (
      await pool
        .request()
        .input("motherId", mssql.VarChar, motherId)
        .execute("getMotherDetailById")
    ).recordset;

    if (motherDetail.length === 0) {
      return res.status(404).json({
        error: "Mother details not found",
      });
    }

    return res.status(200).json({
      motherDetail: motherDetail[0],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

// Update mother details
export const updateMotherDetails = async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      lastName,
      bloodType,
      medicalHistory,
      allergies,
      emergencyContactName,
      emergencyContactPhone,
      insuranceInformation,
      doctorName,
      doctorPhone,
    } = req.body;

    const { motherId } = req.params;

    const pool = await mssql.connect(sqlConfig);

    const result = await pool
      .request()
      .input("motherId", mssql.VarChar, motherId)
      .input("firstName", mssql.VarChar, firstName)
      .input("lastName", mssql.VarChar, lastName)
      .input("bloodType", mssql.VarChar, bloodType)
      .input("medicalHistory", mssql.VarChar, medicalHistory)
      .input("allergies", mssql.VarChar, allergies)
      .input("emergencyContactName", mssql.VarChar, emergencyContactName)
      .input("emergencyContactPhone", mssql.VarChar, emergencyContactPhone)
      .input("insuranceInformation", mssql.VarChar, insuranceInformation)
      .input("doctorName", mssql.VarChar, doctorName)
      .input("doctorPhone", mssql.VarChar, doctorPhone)
      .execute("updateMotherDetails");

    return res.status(200).json({
      message: "Mother details updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

// Delete mother details
export const deleteMotherDetails = async (req: Request, res: Response) => {
  try {
    const { motherId } = req.params;

    const pool = await mssql.connect(sqlConfig);

    const result = await pool
      .request()
      .input("motherId", mssql.VarChar, motherId)
      .execute("deleteMotherDetails");

    return res.status(200).json({
      message: "Mother details deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
