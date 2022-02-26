const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");

const loadDefinition = (protoPath) => {
    return protoLoader.loadSync(
      path.join(__dirname, protoPath), 
      { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true}
    );
}

const attendanceService = grpc.loadPackageDefinition(
    loadDefinition("./assets/protos/attendance.proto")
).attendance;


const AttendanceClient = new attendanceService.Attendance(
    "localhost:55051",
    grpc.credentials.createInsecure()
);

const leaveService = grpc.loadPackageDefinition(
    loadDefinition("./assets/protos/leave.proto")
).leave;


const LeaveClient = new leaveService.Leave(
    "localhost:55052",
    grpc.credentials.createInsecure()
);
  
export { AttendanceClient, LeaveClient };
