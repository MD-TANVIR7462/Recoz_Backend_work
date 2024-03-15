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
Object.defineProperty(exports, "__esModule", { value: true });
exports.studenServices = void 0;
const StudentModel_1 = require("../Models/StudentModel");
const createStudentIntoDB = (student) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield StudentModel_1.studentModel.create(student);
    return result;
});
const getAllStudentIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield StudentModel_1.studentModel.find();
    return result;
});
const getSingleStudentintoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield StudentModel_1.studentModel.findOne({ _id: id });
    return result;
});
const deleteStudentintoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield StudentModel_1.studentModel.deleteOne({ _id: id });
    return result;
});
const updateStudentintoDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const existingStudent = yield StudentModel_1.studentModel.findById(id);
    if (!existingStudent) {
        throw new Error("Student not found");
    }
    const updatedName = Object.assign({}, existingStudent.name);
    if (data.name) {
        for (const key in data.name) {
            if (data.name.hasOwnProperty(key)) {
                updatedName[key] = data.name[key];
            }
        }
    }
    const updateFields = Object.assign({ name: updatedName }, data);
    const result = yield StudentModel_1.studentModel.findByIdAndUpdate(id, { $set: updateFields }, { new: true });
    return result;
});
exports.studenServices = {
    createStudentIntoDB,
    getAllStudentIntoDB,
    getSingleStudentintoDB,
    deleteStudentintoDB,
    updateStudentintoDB,
};