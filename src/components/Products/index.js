import ProductCard from "../ProductCard";
//Style
import { ProductsWrapper, Title } from "./ProductsStyles";
//ReactQuery
import { useQuery } from 'react-query'
import axios from 'axios'


const Products = () => {
    const { isLoading, error, data } = useQuery('parts', () => axios('http://localhost:5000/data'))
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    /* console.log(data) */

    return (
        <>
            <Title>Welcome to Auto parts department</Title>

            <ProductsWrapper>
                {data.data.map((data, index) => (
                    <ProductCard key={index} {...data} />
                ))}
            </ProductsWrapper>
        </>
    );
};

export default Products;