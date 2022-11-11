import React, { useEffect } from 'react'
import ProductCard from '../ProductCard'
import { Title, ProductsWrapper } from './CartStyles'
import useShop from '../../context/ShopContext'
import styled from 'styled-components'

const Cart = () => {
    const { unique, total, clearCart, products, tcount } = useShop()
    useEffect(() => {
        console.log("Unique: ", unique)
        console.log("Total: ", total)
        console.log("Products: ", products)
        console.log("Count: ", tcount)
    }, [unique, total, products, tcount])

    return (
        <>
            <Title>Your cart total is {total}$</Title>

            <ProductsWrapper>
                {unique.map((unique, index) => (
                    <ProductCard key={index} {...unique} />
                ))}
            </ProductsWrapper>
            <ClearButton onClick={clearCart}>Clear Cart</ClearButton>
        </>
    )

}

export default Cart

const ClearButton = styled.button`
    background: #df2424;
    color: #fff;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    margin-top: 1rem;
    cursor: pointer;
    &:hover {
        background: #b81c1c;
        color: #fff;
    }
`;
