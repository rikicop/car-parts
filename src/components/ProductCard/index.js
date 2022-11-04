//import { useEffect, useState } from "react";
import useShop from "../../context/ShopContext";
import { FaTrash } from "react-icons/fa";
import {
    AddButton,
    RemoveButton,
    DecreaseButton,
    Subtitle,
    TextContainer,
    Title,
    Wrapper
} from "./PCardStyles";

const ProductCard = ({ id, name, imageUrl, price, amount }) => {
    const { addToCart, removeFromCart, substractFromCart } = useShop()
    //const [isInCart, setIsInCart] = useState(false)
    /* useEffect(()=>{

    }) */

    const handleAdd = () => {
        const product = { id, name, imageUrl, price, amount }
        addToCart(product);
    }
    const handleDecrease = () => {
        const product = { id, name, imageUrl, price, amount }
        console.log("ID... de Product: ", product.id)
        substractFromCart(product.id);
    }
    const handleRemove = () => {
        const product = { id, name, imageUrl, price, amount }
        removeFromCart(product);
    }




    return (
        <Wrapper background={imageUrl}>
            <AddButton onClick={handleAdd}>
                <p>+</p>
            </AddButton>
            <DecreaseButton onClick={handleDecrease}>
                <p>-</p>
            </DecreaseButton>
            <RemoveButton onClick={handleRemove}>
                <FaTrash />
            </RemoveButton>
            <TextContainer>
                <Title>{name} - {id} </Title>
                {
                    price && <Subtitle>{price}.00$</Subtitle>
                }
                {
                    amount && <Subtitle>{amount}.00$</Subtitle>
                }
            </TextContainer>
        </Wrapper>
    );
};

export default ProductCard;