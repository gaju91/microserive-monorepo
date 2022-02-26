const logs = {
  attendanceLogs: [
    {
      punch: [
        {
          punchTime: "10:10 AM",
          punchType: "IN",
          workFromType: "OFFICE",
        },
        {
          punchTime: "04:20 PM",
          punchType: "OUT",
          workFromType: "HOME",
        },
      ],
      shiftDate: "2022-01-01",
    },
  ],
};

function getLogs(call, callback) {
  console.log(JSON.stringify(call.request));
  callback(null, logs);
}

function updateLogs(call, callback) {
  console.log(JSON.stringify(call.request));
  callback(null, { okay: true });
}

export { getLogs, updateLogs };