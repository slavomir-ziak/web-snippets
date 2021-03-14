import React from 'react';
import { DataGrid } from '@material-ui/data-grid';


export default function DataTable({header, data}) {

    const columns = header.map(h => { 
      return { 
        field: h, 
        headerName: h, 
        sortable: true, 
        flex: 1
      };
    });
    
    columns.splice(0, 0, {field: 'id', headerName: '#', sortable: false})

    const rows = data.map((item, index) => {
      return header.reduce((acc, h) => {
            acc[h] = item[h]; 
            return acc;
          }, {
          id: index + 1
        });
    });

    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </div>
    );
}; 

