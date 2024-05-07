import React from 'react';
import SortTable from '../component/sortTable';
import "../cssFiles/table.css";

function Table(){
const tableData = [["1","ambika","35","Engineer","India"],
["2","preethi","23","Doctor","America"],
["3","mallika","45","Teacher","Japan"],
["4","pravin","34","Painter","Sweden"]];
return( <SortTable props={tableData}/>)

}
export default Table;
