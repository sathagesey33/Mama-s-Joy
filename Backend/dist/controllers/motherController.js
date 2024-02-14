"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMotherDetails = exports.updateMotherDetails = exports.getSingleMotherDetails = exports.getMotherDetails = exports.saveMotherDetails = void 0;
const mssql_1 = __importDefault(require("mssql"));
const sqlConfig_1 = require("../configs/sqlConfig");
const uuid_1 = require("uuid");
// Save mother details
const saveMotherDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, bloodType, medicalHistory, allergies, emergencyContactName, emergencyContactPhone, insuranceInformation, doctorName, doctorPhone, } = req.body;
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        const motherId = (0, uuid_1.v4)();
        const result = yield pool
            .request()
            .input("motherId", mssql_1.default.VarChar, motherId)
            .input("firstName", mssql_1.default.VarChar, firstName)
            .input("lastName", mssql_1.default.VarChar, lastName)
            .input("bloodType", mssql_1.default.VarChar, bloodType)
            .input("medicalHistory", mssql_1.default.VarChar, medicalHistory)
            .input("allergies", mssql_1.default.VarChar, allergies)
            .input("emergencyContactName", mssql_1.default.VarChar, emergencyContactName)
            .input("emergencyContactPhone", mssql_1.default.VarChar, emergencyContactPhone)
            .input("insuranceInformation", mssql_1.default.VarChar, insuranceInformation)
            .input("doctorName", mssql_1.default.VarChar, doctorName)
            .input("doctorPhone", mssql_1.default.VarChar, doctorPhone)
            .execute("saveMotherDetails");
        return res.status(200).json({
            message: "Mother details saved successfully",
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Internal Server Error",
        });
    }
});
exports.saveMotherDetails = saveMotherDetails;
// Get mother details
const getMotherDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        const motherDetails = yield (yield pool.request().execute("getMotherDetails")).recordset;
        return res.status(200).json({
            motherDetails: motherDetails,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Internal Server Error",
        });
    }
});
exports.getMotherDetails = getMotherDetails;
// Get single mother details
const getSingleMotherDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { motherId } = req.params;
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        const motherDetail = yield (yield pool
            .request()
            .input("motherId", mssql_1.default.VarChar, motherId)
            .execute("getMotherDetailById")).recordset;
        if (motherDetail.length === 0) {
            return res.status(404).json({
                error: "Mother details not found",
            });
        }
        return res.status(200).json({
            motherDetail: motherDetail[0],
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Internal Server Error",
        });
    }
});
exports.getSingleMotherDetails = getSingleMotherDetails;
// Update mother details
const updateMotherDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, bloodType, medicalHistory, allergies, emergencyContactName, emergencyContactPhone, insuranceInformation, doctorName, doctorPhone, } = req.body;
        const { motherId } = req.params;
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        const result = yield pool
            .request()
            .input("motherId", mssql_1.default.VarChar, motherId)
            .input("firstName", mssql_1.default.VarChar, firstName)
            .input("lastName", mssql_1.default.VarChar, lastName)
            .input("bloodType", mssql_1.default.VarChar, bloodType)
            .input("medicalHistory", mssql_1.default.VarChar, medicalHistory)
            .input("allergies", mssql_1.default.VarChar, allergies)
            .input("emergencyContactName", mssql_1.default.VarChar, emergencyContactName)
            .input("emergencyContactPhone", mssql_1.default.VarChar, emergencyContactPhone)
            .input("insuranceInformation", mssql_1.default.VarChar, insuranceInformation)
            .input("doctorName", mssql_1.default.VarChar, doctorName)
            .input("doctorPhone", mssql_1.default.VarChar, doctorPhone)
            .execute("updateMotherDetails");
        return res.status(200).json({
            message: "Mother details updated successfully",
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Internal Server Error",
        });
    }
});
exports.updateMotherDetails = updateMotherDetails;
// Delete mother details
const deleteMotherDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { motherId } = req.params;
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        const result = yield pool
            .request()
            .input("motherId", mssql_1.default.VarChar, motherId)
            .execute("deleteMotherDetails");
        return res.status(200).json({
            message: "Mother details deleted successfully",
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Internal Server Error",
        });
    }
});
exports.deleteMotherDetails = deleteMotherDetails;
