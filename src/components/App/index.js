import { LinksWrapper, TitleWrapper, Wrapper } from "./AppStyles";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Products from "../Products";
import Cart from "../Cart"
import { ShopProvider } from "../../context/ShopContext";


function App() {
  return (
    <ShopProvider>
      <Router>
        <Wrapper>
          <TitleWrapper>
            <h1>Auto parts</h1>
          </TitleWrapper>
          <TitleWrapper>
            <p>
              A Context + useReducer Example
            </p>
          </TitleWrapper>
          <LinksWrapper>
            <Link to="/">Principal</Link>
            <Link to="/cart">Cart</Link>
          </LinksWrapper>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Wrapper>
      </Router>
    </ShopProvider>
  );
}

export default App;
