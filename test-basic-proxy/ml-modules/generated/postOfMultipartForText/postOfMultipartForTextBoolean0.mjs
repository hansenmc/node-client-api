'use strict';
// declareUpdate(); // Note: uncomment if changing the database state

const param1 = external.param1; // instanceof DocumentNode+
const inspector = require('/dbf/test/testInspector.sjs');
const errorList = [];
const funcdef   = {
  "functionName" : "postOfMultipartForTextBoolean0",
  "params" : [ {
    "name" : "param1",
    "datatype" : "binaryDocument",
    "multiple" : true,
    "nullable" : false
  } ],
  "return" : {
    "datatype" : "boolean",
    "nullable" : false
  }
};
let fields = {};
fields = inspector.addField(
  '/dbf/test/postOfMultipartForText/postOfMultipartForTextBoolean0', fields, 'param1', param1
  );

fields = inspector.getFields(funcdef, fields, errorList);
inspector.makeResult('/dbf/test/postOfMultipartForText/postOfMultipartForTextBoolean0', funcdef, fields, errorList);
