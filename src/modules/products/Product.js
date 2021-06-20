import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useProducts from './useProducts'
import ProductList from './ProductList'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    table: {
        minWidth: 700,
    },
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export default function Product() {
    const classes = useStyles();
    const [productIndex, products, errorMsg, name, img, price, updateFlag, loading, ctaLoading, setName, setImg, setPrice, fetchData, deleteData, addData, updateData] = useProducts();

    return (
        <React.Fragment>
            <form className={classes.root} noValidate autoComplete="off">
                <table>
                    <tr>
                        <td>
                            <label>
                                Name
                            </label>
                        </td>
                        <td>
                            <TextField
                                required id="standard-required"
                                label="Name" value={name}
                                placeholder="Enter Product Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Image URL
                            </label>
                        </td>
                        <td>
                            <TextField
                                required id="standard-required"
                                label="Image URL" value={img}
                                placeholder="Enter Product Image URL"
                                onChange={(e) => setImg(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Price
                            </label>
                        </td>
                        <td>
                            <TextField
                                required id="standard-number"
                                label="Price" type="number" value={price}
                                placeholder='Enter Price'
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            {updateFlag ?
                                <Button variant="outlined" color="primary" onClick={updateData}>
                                    Update
                                </Button>
                                :
                                <Button variant="outlined" color="primary" onClick={addData} >
                                    {ctaLoading ? 'Loading....' : 'Submit'}
                                </Button>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <p style={{ color: 'red' }}>
                                {errorMsg}
                            </p>
                        </td>
                    </tr>
                </table>
            </form>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">No.</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">Price</StyledTableCell>
                            <StyledTableCell align="left" colSpan={2}>Actions</StyledTableCell>
                            <StyledTableCell align="left">Image URL</StyledTableCell>
                        </TableRow>
                    </TableHead>
                        {products.map((item, index) => {
                            return <ProductList index={index} product={item} deleteData={deleteData} fetchData={fetchData} />
                        })}
                        {loading && <div>Loading....</div>}
                </Table>
            </TableContainer>
        </React.Fragment>
    );
}



// const useStyles = makeStyles({
//     table: {
//         minWidth: 700,
//     },
// });

// export default function CustomizedTables() {
//     const classes = useStyles();

//     return (
//         <TableContainer component={Paper}>
//             <Table className={classes.table} aria-label="customized table">
//                 <TableHead>
//                     <TableRow>
//                         <StyledTableCell>Dessert (100g serving)</StyledTableCell>
//                         <StyledTableCell align="right">Calories</StyledTableCell>
//                         <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
//                         <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
//                         <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {rows.map((row) => (
//                         <StyledTableRow key={row.name}>
//                             <StyledTableCell component="th" scope="row">
//                                 {row.name}
//                             </StyledTableCell>
//                             <StyledTableCell align="right">{row.calories}</StyledTableCell>
//                             <StyledTableCell align="right">{row.fat}</StyledTableCell>
//                             <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//                             <StyledTableCell align="right">{row.protein}</StyledTableCell>
//                         </StyledTableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }
