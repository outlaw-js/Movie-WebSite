import {useContext,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import {Dialog,DialogOverlay,DialogContent}from "@reach/dialog"
import VisuallyHidden from '@reach/visually-hidden';
import {CartContext} from '../../Context/Context';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
const Cart = (props) => {
  const [quantity,setQuantity] =  useState(1);
  const {cartItems,deleteFromCart} = useContext(CartContext)
    const [showDialog, setShowDialog] = useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);
    
    return ( <>
   <div>
      <svg fill="white" style={{width:"40px" }} onClick={open} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M239.1 416c-26.51 0-47.1 21.49-47.1 48S213.5 512 239.1 512s47.1-21.49 47.1-48S266.5 416 239.1 416zM527.1 416c-26.51 0-47.1 21.49-47.1 48s21.49 48 47.1 48s48-21.49 48-48S554.5 416 527.1 416zM633.5 44.73C627.4 36.64 618.1 32 607.1 32H185.1L183.6 19.51C181.4 8.19 171.5 0 160 0H87.1C74.75 0 64 10.74 64 23.1C64 37.25 74.75 48 87.1 48h52.14l60.28 316.5C202.6 375.8 212.5 384 224 384H552c13.25 0 24-10.75 24-23.1C576 346.7 565.3 336 552 336H243.9L234.7 288h318.4c14.28 0 26.84-9.474 30.76-23.21l54.86-191.1C641.5 63.05 639.6 52.83 633.5 44.73zM541 240H225.6l-30.47-160h391.7L541 240zM24 144h80C117.3 144 128 133.3 128 120C128 106.7 117.3 96 104 96h-80C10.75 96 0 106.7 0 120C0 133.3 10.75 144 24 144zM24 224h96C133.3 224 144 213.3 144 200c0-13.26-10.74-24-24-24h-96C10.75 176 0 186.7 0 200C0 213.3 10.75 224 24 224zM136 256h-112C10.75 256 0 266.7 0 280C0 293.3 10.75 304 24 304h112C149.3 304 160 293.3 160 280C160 266.7 149.3 256 136 256z"/></svg>

      <Dialog aria-label='ss' isOpen={showDialog} onDismiss={close} style={{width:"auto"}}>
        <button className="close-button" onClick={close}>
          <span style={{marginBottom:"20px"}} aria-hidden><CloseIcon color='error' /></span>
        </button>
        {cartItems.length ===0 ? <h1 style={{textAlign:"center"}}>سبد خرید خالی است </h1>: 
        <TableContainer component={Paper} st>
        <Table  size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>title</TableCell>
            <TableCell>id</TableCell>
            <TableCell>price</TableCell>
            <TableCell>quantity</TableCell>
            <TableCell></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
       {cartItems.map((data, i) => (
         
  <TableRow>
    <TableCell>{data.title}</TableCell>
    <TableCell>{data.id}</TableCell>
    <TableCell>{data.price}</TableCell>
    <TableCell>1</TableCell>
    <TableCell><Button variant='contained' color="error" onClick={()=>deleteFromCart(data.id)}><DeleteIcon/>Delete</Button></TableCell>
  </TableRow>
            ))}
            </TableBody>
            </Table>
            </TableContainer>
        }
      </Dialog>
    </div> 


      </> );
}
 
export default Cart;