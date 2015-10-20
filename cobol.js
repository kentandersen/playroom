var Cobol = require("cobol");
// Execute some COBOL snippets
Cobol(function () { /*
     IDENTIFICATION DIVISION.
     PROGRAM-ID. HELLO.
     ENVIRONMENT DIVISION.
     DATA DIVISION.
     PROCEDURE DIVISION.
     PROGRAM-BEGIN.
         DISPLAY "Hello world".
     PROGRAM-DONE.
         STOP RUN.
*/ }, function (err, data) {
  console.log(err || data); // Hello world
});