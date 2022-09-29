
import { shopData } from "../../Data/ShopData";
import ProductCard from "../ProductCard";

//Style
import { ProductsWrapper, Title } from "./ProductsStyles";


const Products = () => {
    return (
        <>
            <Title>Welcome to Auto parts department</Title>

            <ProductsWrapper>
                {shopData.map((data, index) => (
                    <ProductCard key={index} {...data} />
                ))}
            </ProductsWrapper>
        </>
    );
};

export default Products;