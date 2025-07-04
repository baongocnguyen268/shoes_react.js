import { useState } from "react";

export default function Cart({ cart, handleCartQuantity, handleDeleteCart }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Open Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center font-bold gap-2 px-4 py-2 bg-gray-800 text-white rounded"
      >
        <i className="fa-solid fa-cart-shopping" />
        Open Cart
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white p-6 w-full max-w-4xl max-h-[90vh] overflow-auto rounded shadow-xl">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Cart Table */}
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs uppercase bg-gray-100">
                <tr>
                  <th className="px-6 py-3">Product Name</th>
                  <th className="px-6 py-3">Image</th>
                  <th className="px-6 py-3">Price</th>
                  <th className="px-6 py-3">Quantity</th>
                  <th className="px-6 py-3">Total</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {cart.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-6 text-gray-400">
                      Your cart is empty.
                    </td>
                  </tr>
                ) : (
                  cart.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="px-6 py-4 font-medium">{item.name}</td>
                      <td className="px-6 py-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-contain"
                        />
                      </td>
                      <td className="px-6 py-4">${item.price}</td>
                      <td className="px-6 py-4 space-x-2">
                        <button
                          disabled={item.quantity === 1}
                          onClick={() => handleCartQuantity(item.id, -1)}
                          className="px-2 py-1 rounded border disabled:opacity-50"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => handleCartQuantity(item.id, 1)}
                          className="px-2 py-1 rounded border"
                        >
                          +
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        ${item.price * item.quantity}
                      </td>
                      <td className="px-6 py-4 text-red-500">
                        <button onClick={() => handleDeleteCart(item.id)}>
                          X
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
