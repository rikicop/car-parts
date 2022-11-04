import React from 'react'
import ProductCard from '../ProductCard'
import { Title, ProductsWrapper } from './CartStyles'
import useShop from '../../context/ShopContext'

const Cart = () => {
    const { unique, total } = useShop()
    return (
        <>
            <Title>Your cart total is {total}$</Title>
            <ProductsWrapper>
                {unique.map((unique, index) => (
                    <ProductCard key={index} {...unique} />
                ))}
            </ProductsWrapper>
        </>
    )

}

export default Cart


