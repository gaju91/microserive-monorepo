const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");

const PROTO_PATH = path.join(__dirname, "./assets//protos/attendance.proto");
const SERVER_URI = "0.0.0.0:55051";

const packageDef = protoLoader.loadSync(PROTO_PATH, {});
const attendanceProto = grpc.loadPackageDefinition(packageDef);
const attendancePackage = attendanceProto.attendance;
import { getLogs, updateLogs } from "./app/models/data";

const server = new grpc.Server();

server.addService(attendancePackage.Attendance.service, {
  getLogs: getLogs,
  updateLogs: updateLogs,
});

const AttendanceClient = new attendancePackage.Attendance(
  SERVER_URI,
  grpc.credentials.createInsecure()
);
export default AttendanceClient;

server.bindAsync(
  SERVER_URI,
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log("Server at port:", port);
    console.log("Server running at http://127.0.0.1:55051");
    server.start();
  }
);