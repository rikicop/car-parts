## Part II

[]: # Language: markdown
[]: # Path: docs\steps\Implementation.md

1. Add product to the cart

ProductCard > index.js


```jsx
 // -- Product Card Elements Imported --
 import useShop from "../../context/ShopContext"; 

 const ProductCard = ({ id, name, imageUrl, price }) => {
    const { addToCart } = useShop() // addToCart is a function that we get from the context
 

    const handleClick = () => {
        // product is an object that we pass to the addToCart function
        const product = { id, name, imageUrl, price } 
        // id, name, imageUrl, price comes from the props
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
```