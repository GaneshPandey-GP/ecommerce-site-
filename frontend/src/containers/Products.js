import React, { useEffect, useState } from 'react';
import {Card, Button} from 'react-bootstrap';
import "./Products.css"
import { useDataLayerValue } from '../DataLayer';

function Products() {

    const [{product_list}, dispatch] = useDataLayerValue()

    return(
        <div>
            <div className="container d-flex justify-content-around">
                {product_list.map(product => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.thumbnail} />
                        <Card.Body>
                            <Card.Title>{product.item_name}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Button variant="primary">View Product</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            
        </div>
    );
}


export default Products;