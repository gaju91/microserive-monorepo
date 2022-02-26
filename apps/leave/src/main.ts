const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");

const PROTO_PATH = path.join(__dirname, "./assets/protos/leave.proto");
const SERVER_URI = "0.0.0.0:55052";

const packageDef = protoLoader.loadSync(PROTO_PATH, {});
const leaveProto = grpc.loadPackageDefinition(packageDef);
const leavePackage = leaveProto.leave;
import { getLogs, updateLogs } from "./app/models/data";

const server = new grpc.Server();

server.addService(leavePackage.Leave.service, {
  getLogs: getLogs,
  updateLogs: updateLogs,
});


server.bindAsync(
  SERVER_URI,
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log("Server at port:", port);
    console.log("Server running at http://127.0.0.1:55051");
    server.start();
  }
);