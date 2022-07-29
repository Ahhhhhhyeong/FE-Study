import React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import data from './assets/data/diseases.json';


const rows = data.map((value) => value);

const columns = [
    { field: 'no', headerName: 'NO', width: 80 },   
    { field: 'sickCode', headerName: 'sickCode', widht: 100 },
    { field: 'sickName', headerName: 'sickName'},
];



function DataSet() {
    return (
        <Box sc={{ widht: '100%' }}>
            <DataGrid 
                rows={rows}
                getRowId={(row) => row.no}
                columns={columns}
                checkboxSelection
                disableSelectionOnClick
                autoHeight
            />
        </Box>
    );
}

export default DataSet;