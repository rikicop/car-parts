import styled from "styled-components";

export const NavContainer = styled.nav`
    background: #008B8B;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    .cart-icon {
        font-size: 1.8rem;
        cursor: pointer;   
    }

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;
