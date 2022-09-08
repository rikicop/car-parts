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
            <h1>useReducer Hook Starter Project</h1>
            <p>
              A <a href="designcode.io">Design+Code</a> tutorial
            </p>
          </TitleWrapper>
          <LinksWrapper>
            <Link to="/">Home</Link>
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
