import { AttendanceClient, LeaveClient } from "./client";

const getAttendanceLogData = async(req, res) => {

    const promiseOfAttData = new Promise((resovle) => {
      AttendanceClient.getLogs({ employee_id: 1 }, (err, response) => {
        if (err) {
          console.error(err);
        } else {
          resovle(response);
        }
      });
    }) 

    const attendanceData = await promiseOfAttData;

    const promiseOfLvData = new Promise((resovle) => {
      LeaveClient.getLogs({ employee_id: 2 }, (err, response) => {
        if (err) {
          console.error(err);
        } else {
          resovle(response);
        }
      });
    }) 

    const leaveData = await promiseOfLvData;
    return {attendanceData, leaveData};
}

export default getAttendanceLogData;