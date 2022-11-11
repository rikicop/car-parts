import React, { useEffect } from 'react'
import { NavContainer } from './NavStyles'
// import cart react icons
import { FaShoppingCart } from 'react-icons/fa';
import useShop from '../../context/ShopContext';

const Nav = () => {
    const { tcount } = useShop()
    useEffect(() => {
        console.log(tcount)
    }, [tcount])
    return (
        <NavContainer>
            <div className="cart-icon">
                <FaShoppingCart style={{ width: '50px', height: "50px" }} />
                <span>{tcount}</span>
            </div>
        </NavContainer>
    )
}

export default Nav