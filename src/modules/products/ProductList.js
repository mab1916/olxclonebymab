import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
    fab: {
        margin: theme.spacing(2),
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
}));

export default function ProductList({ product, index, deleteData, fetchData }) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <TableBody className={classes.table} aria-label="customized table">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <StyledTableRow key={product.name}>
                    <StyledTableCell align="left">{index + 1}</StyledTableCell>
                    <StyledTableCell component="th" scope="row">{product.name}</StyledTableCell>
                    <StyledTableCell align="left">{product.price}</StyledTableCell>
                    <StyledTableCell align="left">
                        <Tooltip title="Delete">
                            <IconButton aria-label="delete" onClick={() => deleteData(product.docID)}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit" aria-label="edit">
                            <Fab color="primary" className={classes.fab} onClick={() => fetchData(product)}>
                                <EditIcon />
                            </Fab>
                        </Tooltip>
                    </StyledTableCell>
                    <StyledTableCell align="left">{product.img}</StyledTableCell>
                </StyledTableRow>
            </TableBody>
        </React.Fragment>
    );
}
