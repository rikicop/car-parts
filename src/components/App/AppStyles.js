import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;
  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  * {
    margin: 0;
  }
  align-items: center;
  justify-content: center;
  display: grid;
  row-gap: 10px;

  p{
    font-weight: 600;
    font-size: larger;
  }

`;

export const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: darkcyan;

    :hover {
      color: darkcyan;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;