

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
      <h1 className='bg-slate-100 rounded-md p-3 flex justify-between items-center font-serif uppercase text text-3xl text-blue-600'>People</h1>
      <BasicTable data={data} columns={columns} />
    </div>
  )
}
