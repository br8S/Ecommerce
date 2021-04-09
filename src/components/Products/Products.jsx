import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

/*
const products = [
    { id: 1, name: 'VIBRATIONS TEE', description: 'Short Sleeve T-Shirt - Graphic Art', description2: '100% Cotton', description3: 'Imported', price: '$40', image: 'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/3903704_WHIT_2_1728x.jpg?v=1615931915' },
    { id: 2, name: 'BAD DREAM TEE', description: 'Short Sleeve T-Shirt - Graphic Art', description2: '100% Cotton', description3: 'Imported', price: '$40', image: 'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/1904648_WHIT_1_2048x.jpg?v=1617123362' },
] 
*/

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return(
        <main className={ classes.content }>
            <div className={ classes.toolbar }/>
            <Grid container justify="center" spacing={4}>
                { products.map(( product ) => (
                    <Grid item key={ product.id } xs={12} sm={6} md={4} lg={3}>
                        <Product product={ product } onAddToCart={ onAddToCart } /> 
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;