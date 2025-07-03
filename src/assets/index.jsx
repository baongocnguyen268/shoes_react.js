import products from "./data_product.json";
import { useState } from "react";
import Shoes from "./shoes";
import ShoesDetails from "./shoes-details";

export default function ShoesStore() {
  const [productList] = useState(products);
  const [productDetail, setProductDetail] = useState(productList[0]);

  const handlGetProduct = (product) => {
    setProductDetail(product);
  };

  const renderProductList = () =>
    productList.map((product) => (
      <Shoes key={product.id} product={product} getProduct={handlGetProduct} />
    ));

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-10">Shoes Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {renderProductList()}
      </div>
      <ShoesDetails productDetail={productDetail} />
    </div>
  );
}
