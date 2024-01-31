import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {remove} from '../store/cartSlice'

function Cart() {
  const productCart = useSelector(state => state.cart)
  const dispatch = useDispatch();

const removefromCart = (id) => {
  dispatch(remove(id));
}

  const cards = productCart.map(
    product => (
        <div className="col-lg-3 col-md-12 col-sm-12 mb-4" key={product.id}>
        <Card style={{ width: '320px', height: '260px', textAlign: 'center', margin: '2px 2px', marginLeft:'25px'}}>
            <Card.Img variant="top" src={product.image} style={{width:'73px', height:'100px' }} className='mx-auto' />
            <Card.Body>
                <Card.Title style={{fontSize: '12px'}}>{product.title}</Card.Title>
                <Card.Text>
                ${product.price}
                </Card.Text>
            </Card.Body>
            <Card.Footer style={{background: 'white', borderTop: 'none'}}> 
                <Button variant="danger" onClick={()=> removefromCart(product.id)}>Remove Item</Button>
            </Card.Footer>
        </Card>

        </div>
    )
)
  return (
    <div className='row'>{cards}</div>
  )
}

export default Cart