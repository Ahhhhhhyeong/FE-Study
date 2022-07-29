import React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import data from './assets/data/diseases.json';


const rows = data.map((value) => value);

const columns = [
    { field: 'no', headerName: 'NO', width: 80 },   
    { field: 'sickCode', headerName: '질병코드', widht: 100 },
    { field: 'sickName', headerName: '질병명', widht: 200 },
];



function DataSet() {
    return (
        <Box sc={{ height: 800, widht: '100%' }}>
            <DataGrid 
                rows={rows}
                getRowId={(row) => row.no}
                columns={columns}
                pageSize={5}
                rowsPerPageOption={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </Box>
    );
}

export default DataSet;