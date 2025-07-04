import products from "./data_product.json";
import { useState } from "react";
import Shoes from "./shoes";
import ShoesDetails from "./shoes-details";
import Cart from "./cart";

export default function ShoesStore() {
  const [productList] = useState(products);
  const [productDetail, setProductDetail] = useState(productList[0]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (shoe) => {
    const newCarts = [...cart];
    const index = newCarts.findIndex((item) => item.id === shoe.id);
    if (index === -1) {
      setCart([...newCarts, { ...shoe, quantity: 1 }]);
    } else {
      newCarts[index].quantity += 1;
      setCart(newCarts);
    }
  };

  const handleDeleteCart = (id) => {
    setCart(cart.filter((item) => item.id !== id ));
  }

  const handleCartQuantity = (id, quantity) => {
    setCart(
      cart.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          quantity: item.quantity + quantity,
        };
      })
    );
  };

  const handlGetProduct = (product) => {
    setProductDetail(product);
  };

  const renderProductList = () => {
    return productList.map((product) => {
      return (
        <Shoes
          key={product.id}
          product={product}
          getProduct={handlGetProduct}
          handleAddToCart={handleAddToCart}
        />
      );
    });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <Cart 
      cart={cart} 
      handleCartQuantity={handleCartQuantity}
      handleDeleteCart={handleDeleteCart}
      />
      <h1 className="text-4xl font-bold text-center mb-10">Shoes Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {renderProductList()}
      </div>
      <ShoesDetails productDetail={productDetail} />
    </div>
  );
}
