import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Importa PropTypes

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //incrementear contador ShoppingCard
  const [count, setCount] = useState(0);
 
 //Abrir-cerrar ProductDetail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  //Product Detail · Mostrar productos
  const [productToShow, setProductToShow] = useState({
    title:"",
    price:"",
    description:"",
    images: [],
  })

  //Abrir-cerrar Checkout Side Menu
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

//Product Detail · Añadir productos al carrito
  const [cartProducts, setCartProducts] = useState([])

//Shopping Cart · Order
  const [order, setOrder] = useState([])

  return (
    <ShoppingCartContext.Provider value={{ 
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
