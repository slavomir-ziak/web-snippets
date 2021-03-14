import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';


export default function DataTable({header, data}) {

    const columns = header.map(h => { return { field: h, headerName: h, sortable: true, flex: 1};});
    
    columns.splice(0, 0, {field: 'index', headerName: '#'})

    const rows = data.map((item, index) => {
      const row = header.reduce((acc, h) => { acc[h] = item[h]; return acc;}, {id: index});
      row['index'] = index + 1;
      return row;
    });

    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </div>
    );
}; 

