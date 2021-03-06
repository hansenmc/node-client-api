'use strict';
// declareUpdate(); // Note: uncomment if changing the database state

var param1; // instanceof xs.int+
const inspector = require('/dbf/test/testInspector.sjs');
const errorList = [];
const funcdef   = {
  "functionName" : "postOfUrlencodedForMultipartXmlDocument1ReturnNull",
  "params" : [ {
    "name" : "param1",
    "datatype" : "int",
    "multiple" : true,
    "nullable" : false
  } ],
  "return" : {
    "datatype" : "xmlDocument",
    "multiple" : true,
    "nullable" : true
  }
};
let fields = {};
fields = inspector.addField(
  '/dbf/test/postOfUrlencodedForMultipart/postOfUrlencodedForMultipartXmlDocument1ReturnNull', fields, 'param1', param1
  );

fields = inspector.getFields(funcdef, fields, errorList);
inspector.makeResult('/dbf/test/postOfUrlencodedForMultipart/postOfUrlencodedForMultipartXmlDocument1ReturnNull', funcdef, fields, errorList);
