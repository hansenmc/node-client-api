xquery version "1.0-ml";

let $evalStr :=
'
xquery version "1.0-ml";
xdmp:document-insert("/optic/view/test/masterDetail.tde",
  <template xmlns="http://marklogic.com/xdmp/tde">
  <context>/sets</context>
  <templates>
    <template>
      <context>masterSet/master</context>
      <rows>
        <row>
          <schema-name>opticFunctionalTest</schema-name>
          <view-name>master</view-name>
          <columns>
            <column><name>id</name><scalar-type>int</scalar-type><val>id</val></column>
            <column><name>name</name><scalar-type>string</scalar-type><val>name</val></column>
            <column><name>date</name><scalar-type>date</scalar-type><val>date</val></column>
          </columns>
        </row>
      </rows>
    </template>
    <template>
      <context>detailSet/detail</context>
      <rows>
        <row>
          <schema-name>opticFunctionalTest</schema-name>
          <view-name>detail</view-name>
          <columns>
            <column><name>id</name><scalar-type>int</scalar-type><val>id</val></column>
            <column><name>name</name><scalar-type>string</scalar-type><val>name</val></column>
            <column><name>masterId</name><scalar-type>int</scalar-type><val>masterId</val></column>
            <column><name>amount</name><scalar-type>double</scalar-type><val>amount</val></column>
            <column><name>color</name><scalar-type>string</scalar-type><val>color</val></column>
          </columns>
        </row>
      </rows>
    </template>
  </templates>
</template>,
(xdmp:permission("rest-evaluator", "update")),
"http://marklogic.com/xdmp/tde",
()
)'

return 
xdmp:eval(
  $evalStr,
  (),
  <options xmlns="xdmp:eval">
    <database>{xdmp:database("nodeOpticFunctionalTestModules")}</database>
  </options>
);
