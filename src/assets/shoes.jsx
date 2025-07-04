const Shoes = (props) => {
  const { product, getProduct , handleAddToCart } = props;

  const handleShoesDetails = (product) => {
    getProduct(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 dark:bg-gray-800">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-contain mb-4"
      />
      <h2 className="text-lg font-semibold dark:text-white text-center">
        {product.name}
      </h2>
      <p className="text-gray-500 dark:text-gray-400 text-center">
        ${product.price}
      </p>
      <div className="mt-4 flex flex-col gap-2">
        <button
          onClick={() => {
            handleAddToCart(product);
          }}
          className="w-full bg-black text-white py-2 rounded text-sm hover:bg-gray-700"
        >
          Add to cart
        </button>
        <button
          onClick={() => handleShoesDetails(product)}
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Product Details
        </button>
      </div>
    </div>
  );
};

export default Shoes;
