import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function DataTable({header, json}) {


    const classes = useStyles();

    const headers = (
    <TableRow>
          <TableCell>#</TableCell>
          {
          header.map(head => <TableCell>{head}</TableCell>)
        }</TableRow>);

    const rows = json.map((json, index) => {
      return <TableRow>
        <TableCell>{index+1}</TableCell>
        {header.map(header => <TableCell>{json[header]}</TableCell>)}
      </TableRow>
    }) 

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
        <TableHead>
        {headers}
        </TableHead>
        <TableBody>
         {rows}
         </TableBody>
      </Table>
    </TableContainer>
    );
  }

