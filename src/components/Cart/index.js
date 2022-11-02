import React from 'react'
import ProductCard from '../ProductCard'
import { Title } from './CartStyles'
import useShop from '../../context/ShopContext'

const Cart = () => {
    const { products } = useShop()
    return (
        <>
            <Title>Your cart total is 300.00$</Title>
            {products.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
        </>
    )

}

export default Cart