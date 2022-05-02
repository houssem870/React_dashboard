import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'Title', label: 'Job Title', minWidth: 170 },
  { id: 'Location', label: 'Location', minWidth: 100 },
  {
    id: 'Salary',
    label: 'Salary',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Experience',
    label: 'Experience',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
 
];

function createData(Title, Location, Salary, Experience) {
 
  return { Title, Location, Salary, Experience };
}

const rows = [
  createData('Backend developer', 'Tunisia', 3000, 3),
  createData('Frontend developer', 'France', 3000, 2),
  createData('Data scientist', 'united state', 2000, 2),
  createData('data analyst', 'Tunisia', 3500, 3),
  createData('Business inteligence', 'Tunisia', 4000, 4),
  createData('Django developer', 'bruxels', 5000, 6),
  createData('spring developer', 'Tunisia', 3000, 2),
  createData(' python developer ', 'Tunisia', 3000, 3),
  createData('Data engineer', 'Tunisia', 3000, 3),
  createData('Cyber securite engineer', 'Tunisia', 3000, 3),
  createData('Maketing ', 'Tunisia', 3000, 3),
  createData('Project Manager', 'france', 3000, 3),
  createData('Backend developer', 'Tunisia', 3000, 3),
  createData('Backend developer', 'Tunisia', 3000, 3),
  createData('Backend developer', 'Tunisia', 3000, 3),
];

const Jobs = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      );
}

export default Jobs
