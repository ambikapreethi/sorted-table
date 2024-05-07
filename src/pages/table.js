import React from 'react';
import SortTable from '../component/sortTable';
import "../cssFiles/table.css";

function Table(){
const tableData = [["1","ambika","Engineer","India"],
["2","preethi","Doctor","America"],
["3","mallika","Teacher","Japan"],
["4","pravin","Painter","Sweden"]];
return( <SortTable props={tableData}/>)

}
export default Table;
