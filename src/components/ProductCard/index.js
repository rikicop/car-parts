//import { useEffect, useState } from "react";
import useShop from "../../context/ShopContext";
import {
    AddButton,
    DeleteButton,
    Subtitle,
    TextContainer,
    Title,
    Wrapper
} from "./PCardStyles";

const ProductCard = ({ id, name, imageUrl, price }) => {
    const { addToCart } = useShop()
    //const [isInCart, setIsInCart] = useState(false)

    /* useEffect(()=>{
    
    }) */

    const handleClick = () => {
        const product = { id, name, imageUrl, price }
        addToCart(product);
    }

    return (
        <Wrapper background={imageUrl}>
            <AddButton onClick={handleClick}>
                <p>+</p>
            </AddButton>
            <DeleteButton onClick={handleClick}>
                <p>-</p>
            </DeleteButton>
            <TextContainer>
                <Title>{name}</Title>
                <Subtitle>{price}.00$</Subtitle>
            </TextContainer>
        </Wrapper>
    );
};

export default ProductCard;