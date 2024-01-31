import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux'
import {add} from '../store/cartSlice'
//import {getProducts} from '../store/productSlice'

function Products() {
  const dispatch = useDispatch()
  // const {data: products} = useSelector(state => state.products)
    
  const [products, getProducts] = useState([])
  
  useEffect(()=>{
      // dispatch(getProducts());

    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(result=>getProducts(result))


  }, [])

  const addtoCart = (product) => {
      dispatch(add(product));

  }
  
      const cards = products && products.map(
        product => (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={product.id}>
            <Card style={{ width: '320px', height: '260px', textAlign: 'center', margin: '2px 2px', marginLeft:'25px'}}>
                <Card.Img variant="top" src={product.image} style={{width:'73px', height:'100px' }} className='mx-auto' />
                <Card.Body>
                    <Card.Title style={{fontSize: '12px'}}>{product.title}</Card.Title>
                    <Card.Text>
                    ${product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{background: 'white', borderTop: 'none'}}> 
                    <Button variant="primary" onClick={()=> addtoCart(product)}>Add to Cart</Button>
                </Card.Footer>
            </Card>

            </div>
        )
    )
  
    return (
    <>
    <div>products</div>
    <div className='row'>{cards}</div>
    
    </>
    



  )
}

export default Products