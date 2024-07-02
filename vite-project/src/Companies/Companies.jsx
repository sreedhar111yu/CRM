import React, { useState, useMemo } from 'react';
import { useTable, useSortBy, useFilters, useRowSelect } from 'react-table';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EditableCell from './EditableCell';

const Companies = () => {
  const [data, setData] = useState([
    {
      name: 'Mark Young',
      email: 'mark.young@example.com',
      company: 'Google',
      phone: '(555) 555-5555',
      creationDate: '2 Jul 2024 - 03:30',
      city: 'West Justin',
      jobTitle: 'Surveyor, minerals',
      mobile: '(555) 555-5555',
    },
    // Add more data as required
  ]);

  const [selectedPerson, setSelectedPerson] = useState(null);

  const updateMyData = (rowIndex, columnId, value) => {
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        Cell: EditableCell,
      },
      {
        Header: 'Email',
        accessor: 'email',
        Cell: EditableCell,
      },
      {
        Header: 'Company',
        accessor: 'company',
        Cell: EditableCell,
      },
      {
        Header: 'Phone',
        accessor: 'phone',
        Cell: EditableCell,
      },
      {
        Header: 'Creation date',
        accessor: 'creationDate',
        Cell: EditableCell,
      },
      {
        Header: 'City',
        accessor: 'city',
        Cell: EditableCell,
      },
      {
        Header: 'Job Title',
        accessor: 'jobTitle',
        Cell: EditableCell,
      },
      {
        Header: 'Mobile',
        accessor: 'mobile',
        Cell: EditableCell,
      },
    ],
    []
  );

  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn: {
        Cell: EditableCell,
      },
      updateMyData,
    },
    useFilters,
    useSortBy,
    useRowSelect
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  const handleAddRow = () => {
    const newRow = {
      name: '',
      email: '',
      company: '',
      phone: '',
      creationDate: '',
      city: '',
      jobTitle: '',
      mobile: '',
    };
    setData([...data, newRow]);
  };

  const handleDeleteRow = (rowIndex) => {
    const newData = data.filter((row, index) => index !== rowIndex);
    setData(newData);
  };

  return (
    <div className="people-page container mx-auto p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={handleAddRow}
      >
        Add Row
      </button>
      <table {...getTableProps()} className="table-auto w-full bg-white shadow-md rounded-lg">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-4 py-2">
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
              <th className="px-4 py-2">Actions</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                onClick={() => setSelectedPerson(row.original)}
                className="hover:bg-gray-100 cursor-pointer"
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="border-t px-4 py-2">{cell.render('Cell')}</td>
                ))}
                <td className="border-t px-4 py-2">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDeleteRow(rowIndex)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {selectedPerson && (
        <div className="details-pane mt-6 p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl mb-4">{selectedPerson.name}</h2>
          <Tabs>
            <TabList className="flex space-x-2 mb-4 border-b">
              <Tab className="px-4 py-2 cursor-pointer" selectedClassName="border-b-2 border-blue-500">
                Tasks
              </Tab>
              <Tab className="px-4 py-2 cursor-pointer" selectedClassName="border-b-2 border-blue-500">
                Notes
              </Tab>
              <Tab className="px-4 py-2 cursor-pointer" selectedClassName="border-b-2 border-blue-500">
                Emails
              </Tab>
            </TabList>

            <TabPanel>
              <p>Tasks for {selectedPerson.name}</p>
              {/* Add task content here */}
            </TabPanel>
            <TabPanel>
              <p>Notes for {selectedPerson.name}</p>
              {/* Add notes content here */}
            </TabPanel>
            <TabPanel>
              <p>Emails for {selectedPerson.name}</p>
              {/* Add emails content here */}
            </TabPanel>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default Companies;
