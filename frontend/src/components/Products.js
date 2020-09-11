import React, { useEffect, useState } from 'react';
import axios from "axios";

import {productListURL} from '../constraints'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Typography from '@material-ui/core/Typography';
import "./Products.css"

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
        <div className="d-flex justify-content-around">
            {products.map(product => (
                <Card key={product.id} className="card">
                    <CardActionArea>
                        <img className="product__image" src={product.thumbnail} alt={product.item_name} />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.label}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.item_name}
                        </Typography>
                        {product.discount_price ? 

                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.discount_price}
                        </Typography>:
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.price}
                        </Typography>

                        }
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <AddShoppingCartIcon />
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}




export default Products;