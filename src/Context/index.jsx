import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Importa PropTypes

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //ShoppingCard
  const [count, setCount] = useState(0);
 
 //Abrir-cerrar ProductDetail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  //Mostrar productos ProductDetail
  const [productToShow, setProductToShow] = useState({
    title:"",
    price:"",
    description:"",
    images: [],
  });



  return (
    <ShoppingCartContext.Provider value={{ 
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
