# Running app
First Do npm install in sumhrms directory

Attendance Microservice:-
nx run attendance:serve


Leave Microservice:-
nx run leave:serve

Server:-
nx run server:serve

# Test 
Hit end point :- http://localhost:8080/getattendancelog
This should return :- {"attendanceData":{"attendance_logs":[{"punch":[{"punch_time":"10:10 AM","punch_type":"IN","work_from_type":"OFFICE"},{"punch_time":"04:20 PM","punch_type":"OUT","work_from_type":"HOME"}],"shift_date":"2022-01-01"}]},"leaveData":{"attendance_logs":[{"punch":[{"punch_time":"10:10 AM","punch_type":"IN","work_from_type":"OFFICE"},{"punch_time":"04:20 PM","punch_type":"OUT","work_from_type":"HOME"}],"shift_date":"2022-01-01"}]}}