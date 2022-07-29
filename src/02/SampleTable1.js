import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Tab } from '@mui/material';

function createData(name, address, hosAdmin, tel, url){
    return { name, address, hosAdmin, tel, url };
}

const row = [
    createData('A병원', '부산광역시 해운대구', '김원장', '010-4444-2222', 'www.ahospital.com'),
    createData('B병원', '부산광역시 해운대구', '이원장', '010-1111-2222', 'www.bhospital.com'),
    createData('C병원', '부산광역시 해운대구', '안원장', '010-3333-2222', 'www.chospital.com'),
    createData('D병원', '부산광역시 해운대구', '권원장', '010-6666-2222', 'www.dhospital.com')
];


function SampleTable(props) {
    return (
        <TableContainer component={Paper} >
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>병원이름</TableCell>
                        <TableCell align="center">주소</TableCell>
                        <TableCell align="center">관리자</TableCell>
                        <TableCell align="center">전화번호</TableCell>
                        <TableCell align="center">URL</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {row.map((row) => (
                        <TableRow 
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}  
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align='center'>{row.address}</TableCell>
                            <TableCell align='center'>{row.hosAdmin}</TableCell>
                            <TableCell align='center'>{row.tel}</TableCell>
                            <TableCell align='center'>{row.url}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SampleTable;