import React from 'react'
import ProductCard from '../ProductCard'
import { Title } from './CartStyles'
import useShop from '../../context/ShopContext'

const Cart = () => {
    const { products } = useShop()
    let count = {}
    products.forEach(product => {
        count[product.name] = (count[product.name] || 0) + 1
    })
    console.log(count)
    let unique = []

    for (let name in count) {
        unique.push({
            name: name,
            imageUrl: products.find(product => product.name === name).imageUrl,
            count: count[name], amount: count[name] * products.find(product => product.name === name).price
        })
    }
    console.log(unique)

    return (
        <>
            <Title>Your cart total is 300.00$</Title>
            {unique.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))}
            <h5>Amounts</h5>
            <ul>
                {unique.map((product, index) => (
                    <li key={index}>{product.name} x {product.count} = {product.amount}</li>
                ))}
            </ul>
        </>
    )

}

export default Cart