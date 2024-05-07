import React, { useState } from 'react';

export default function SortTable({props})
{
    const data=props;
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedHeaderIndex, setSelectedHeaderIndex] = useState(0);

  const handleSort = (index) => {
    setSelectedHeaderIndex(index);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const sortedData = data.sort((a, b) => {
    const aValue = a[selectedHeaderIndex].toLowerCase();
    const bValue = b[selectedHeaderIndex].toLowerCase();
    return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  });
  

  return (
    <table className="tbl">
        <caption>Sorted Table</caption>
      <thead>
        <tr>
          <th id="h1" onClick={() => handleSort(0)}>ID</th>
          <th id="h2" onClick={() => handleSort(1)}>Name</th>
          <th id="h3" onClick={() => handleSort(2)}>Designation</th>
          <th id="h4" onClick={() => handleSort(3)}>Country</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <tr key={index}>
            <td>{row[0]}</td>
            <td>{row[1]}</td>
            <td>{row[2]}</td>
            <td>{row[3]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

