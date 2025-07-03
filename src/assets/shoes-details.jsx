export default function ShoesDetails(props) {
  const {productDetail} = props;
  
  return (
    // Main modal
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-4xl max-h-[90vh]">
        {/* Modal content */}
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th colSpan={4} className="px-6 py-4 text-center">
                  <img
                    src={productDetail.image}
                    alt="Adidas Prophere"
                    className="w-1xl mx-auto"
                  />
                </th>
              </tr>
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                 {productDetail.name}
                </th>
                <td className="px-6 py-4">{productDetail.price}</td>
                <td className="px-6 py-4">{productDetail.description}</td>
                <td className="px-6 py-4">{productDetail.quantity}</td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
