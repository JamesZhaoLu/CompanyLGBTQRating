import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CEI_data from './data.json';

const useStyles = makeStyles({
  table: {
    minWidth: 1000,
  },
});

function TableWrapper() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: 'Employer', field: 'name' },
      { title: 'City', field: 'city' },
      { title: 'State', field: 'state'},
      { title: '1a', field: 'scores[0]', type: 'numeric'},
      { title: '1b', field: 'scores[1]', type: 'numeric'},
      { title: '2a', field: 'scores[2]', type: 'numeric'},
      { title: '2b', field: 'scores[3]', type: 'numeric'},
      { title: '2c', field: 'scores[4]', type: 'numeric'},
      { title: '3a', field: 'scores[5]', type: 'numeric'},
      { title: '3b', field: 'scores[6]', type: 'numeric'},
      { title: '3c', field: 'scores[7]', type: 'numeric'},
      { title: '3d', field: 'scores[8]', type: 'numeric'},
      { title: '4', field: 'scores[9]', type: 'numeric'},
      { title: 'Total score', field: 'total', type: 'numeric'},
    ],
    data: CEI_data.map(row => {
      row.scores = [
        row.scores[0] * 15,
        row.scores[1] * 15,
        row.scores[2] * 10,
        row.scores[3] * 10,
        row.scores[4] * 10,
        row.scores[5] * 10,
        row.scores[6] * 10,
        row.scores[7] * 15,
        row.scores[8] * 5,
        row.scores[9] * -25,
      ].map(Math.round);
      return row;
    }),
  });

  return (
    <MaterialTable
      title="Corporate Equality Index Data"
      columns={state.columns}
      data={state.data}
    />
  );
}

export default TableWrapper;
