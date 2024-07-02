// import React, { useState, useMemo } from 'react';
// import { useTable, useSortBy, useFilters, useRowSelect } from 'react-table';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import EditableCell from './EditableCell';

// const PeoplePage = () => {
//   const [data, setData] = useState([
//     {
//       name: 'Mark Young',
//       email: 'mark.young@example.com',
//       company: 'Google',
//       phone: '(555) 555-5555',
//       creationDate: '2 Jul 2024 - 03:30',
//       city: 'West Justin',
//       jobTitle: 'Surveyor, minerals',
//       mobile: '(555) 555-5555',
//     },
//     // Add more data as required
//   ]);

//   const [selectedPerson, setSelectedPerson] = useState(null);

//   const updateMyData = (rowIndex, columnId, value) => {
//     setData((old) =>
//       old.map((row, index) => {
//         if (index === rowIndex) {
//           return {
//             ...row,
//             [columnId]: value,
//           };
//         }
//         return row;
//       })
//     );
//   };

//   const columns = useMemo(
//     () => [
//       {
//         Header: 'Name',
//         accessor: 'name',
//         Cell: EditableCell,
//       },
//       {
//         Header: 'Email',
//         accessor: 'email',
//         Cell: EditableCell,
//       },
//       {
//         Header: 'Company',
//         accessor: 'company',
//         Cell: EditableCell,
//       },
//       {
//         Header: 'Phone',
//         accessor: 'phone',
//         Cell: EditableCell,
//       },
//       {
//         Header: 'Creation date',
//         accessor: 'creationDate',
//         Cell: EditableCell,
//       },
//       {
//         Header: 'City',
//         accessor: 'city',
//         Cell: EditableCell,
//       },
//       {
//         Header: 'Job Title',
//         accessor: 'jobTitle',
//         Cell: EditableCell,
//       },
//       {
//         Header: 'Mobile',
//         accessor: 'mobile',
//         Cell: EditableCell,
//       },
//     ],
//     []
//   );

//   const tableInstance = useTable(
//     {
//       columns,
//       data,
//       defaultColumn: {
//         Cell: EditableCell,
//       },
//       updateMyData,
//     },
//     useFilters,
//     useSortBy,
//     useRowSelect
//   );

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

//   const handleAddRow = () => {
//     const newRow = {
//       name: '',
//       email: '',
//       company: '',
//       phone: '',
//       creationDate: '',
//       city: '',
//       jobTitle: '',
//       mobile: '',
//     };
//     setData([...data, newRow]);
//   };

//   const handleDeleteRow = (rowIndex) => {
//     const newData = data.filter((row, index) => index !== rowIndex);
//     setData(newData);
//   };

//   return (
//     <div className="people-page">
//       <button onClick={handleAddRow}>Add Row</button>
//       <table {...getTableProps()} className="table-auto w-full">
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps(column.getSortByToggleProps())}>
//                   {column.render('Header')}
//                   <span>
//                     {column.isSorted
//                       ? column.isSortedDesc
//                         ? ' 🔽'
//                         : ' 🔼'
//                       : ''}
//                   </span>
//                 </th>
//               ))}
//               <th>Actions</th>
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row, rowIndex) => {
//             prepareRow(row);
//             return (
//               <tr
//                 {...row.getRowProps()}
//                 onClick={() => setSelectedPerson(row.original)}
//               >
//                 {row.cells.map((cell) => (
//                   <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                 ))}
//                 <td>
//                   <button onClick={() => handleDeleteRow(rowIndex)}>Delete</button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>

//       {selectedPerson && (
//         <div className="details-pane">
//           <h2>{selectedPerson.name}</h2>
//           <Tabs>
//             <TabList>
//               <Tab>Tasks</Tab>
//               <Tab>Notes</Tab>
//               <Tab>Emails</Tab>
//             </TabList>

//             <TabPanel>
//               <p>Tasks for {selectedPerson.name}</p>
//               {/* Add task content here */}
//             </TabPanel>
//             <TabPanel>
//               <p>Notes for {selectedPerson.name}</p>
//               {/* Add notes content here */}
//             </TabPanel>
//             <TabPanel>
//               <p>Emails for {selectedPerson.name}</p>
//               {/* Add emails content here */}
//             </TabPanel>
//           </Tabs>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PeoplePage;


import { useMemo } from 'react'
import { DateTime } from 'luxon'
import BasicTable from '../Bars/BasicTable'
import data from '../data/people.json' // Add your JSON data file path


export default function People() {
  const columns = useMemo(
    () => [
      {
        header: 'ID',
        accessorKey: 'id',
      },
      {
        header: 'Name',
        columns: [
          {
            header: 'First',
            accessorKey: 'first_name',
          },
          {
            header: 'Last',
            accessorKey: 'last_name',
          },
        ],
      },
      {
        header: 'Email',
        accessorKey: 'email',
      },
      {
        header: 'Gender',
        accessorKey: 'gender',
      },
      {
        header: 'Date of Birth',
        accessorKey: 'dob',
        cell: info => DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
      },
    ],
    []
  )

  return (
    <div>
      <h1>People</h1>
      <BasicTable data={data} columns={columns} />
    </div>
  )
}
