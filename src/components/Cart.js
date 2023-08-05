import React from 'react'
import { Button, Container,Image } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useSelector,  useDispatch } from 'react-redux';
import { deletecart, clear } from './rtk/slices/cart-slice';
const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector( state => state.cart)
    const totalPrice = cart.reduce((acc, product) => {
         acc += product.price * product.quantity
         return acc;
    }, 0)
  return (
   <Container>
       <h1  className='py-5'> Welcome to cart </h1>
       <Button className='my-3' onClick={() => dispatch(clear())} variant='danger'>clear</Button>
       <h5>Total Price {totalPrice.toFixed(2)}</h5>
     <Table striped bordered hover >
         <thead>
             <tr>
              <th>#</th>
              <th>Title</th>
              <th>Img</th>
              <th>price</th>
              <th>actions</th>
              <th>quantity</th>
             </tr>
         </thead>
         <tbody>
          {cart.map((product) => (

          <tr key={product.id}>
             <td>{product.id}</td>
             <td>{product.title}</td>
             <td><Image src={product.image} alt={product.title} style={{ height: '100px', width: '100px' }} /></td>
             <td>{product.price}</td>
             <td><Button onClick={() => dispatch(deletecart(product))} variant='danger'>delete</Button></td>
             <td>{product.quantity}</td>
           </tr>
           ))}
         </tbody>
     </Table>
  </Container>
  )
}

export default Cart