import React, { useEffect, useState } from 'react';
import axios from "axios";

import {productListURL} from '../constraints'
import { makeStyles } from '@material-ui/core/styles';
import {Card, Button} from 'react-bootstrap';
import "./Products.css"
import NavigationBar from './Navbar';

function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
        .get(productListURL)
        .then(res => {
            console.log(res.data)
            setProducts(res.data)
        })
        .catch(err => {
          console.log("went wrong")
        });
    },[])
console.log(products)
    return(
        <div>
            <NavigationBar />
            <div className="container d-flex justify-content-around">
                {products.map(product => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.thumbnail} />
                        <Card.Body>
                            <Card.Title>{product.item_name}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            
        </div>
    );
}


export default Products;