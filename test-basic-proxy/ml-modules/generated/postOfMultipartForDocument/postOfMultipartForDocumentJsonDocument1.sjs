'use strict';
// declareUpdate(); // Note: uncomment if changing the database state

var param1; // instanceof DocumentNode+
const inspector = require('/dbf/test/testInspector.sjs');
const errorList = [];
const funcdef   = {
  "functionName" : "postOfMultipartForDocumentJsonDocument1",
  "params" : [ {
    "name" : "param1",
    "datatype" : "jsonDocument",
    "multiple" : true,
    "nullable" : false
  } ],
  "return" : {
    "datatype" : "jsonDocument",
    "multiple" : false,
    "nullable" : true
  }
};
let fields = {};
fields = inspector.addField(
  '/dbf/test/postOfMultipartForDocument/postOfMultipartForDocumentJsonDocument1', fields, 'param1', param1
  );

fields = inspector.getFields(funcdef, fields, errorList);
inspector.makeResult('/dbf/test/postOfMultipartForDocument/postOfMultipartForDocumentJsonDocument1', funcdef, fields, errorList);
