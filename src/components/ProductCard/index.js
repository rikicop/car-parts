//import { useEffect, useState } from "react";
import useShop from "../../context/ShopContext";
import {
    AddButton,
    Subtitle,
    TextContainer,
    Title,
    Wrapper
} from "./PCardStyles";

const ProductCard = ({ name, imageUrl, price }) => {
    const { addToCart } = useShop()
    //const [isInCart, setIsInCart] = useState(false)

    /* useEffect(()=>{
    
    }) */

    const handleClick = () => {
        const product = { name, imageUrl, price }
        addToCart(product);
    }

    return (
        <Wrapper background={imageUrl}>
            <AddButton onClick={handleClick}>
                <p>+</p>
            </AddButton>
            <TextContainer>
                <Title>{name}</Title>
                <Subtitle>{price}.00$</Subtitle>
            </TextContainer>
        </Wrapper>
    );
};

export default ProductCard;