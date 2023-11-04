import { useCallback, memo } from "react";

//using memo to Memoizing it helps prevent unnecessary renders when its parent component renders.
const CartItem = memo(({ item, increaseItem, decreaseQuantity }) => {
  const handleDecrease = useCallback(() => {
    decreaseQuantity(item.id);
  }, [decreaseQuantity, item.id]);

  const handleIncrease = useCallback(() => {
    increaseItem(item.id);
  }, [increaseItem, item.id]);

  return (
    <section key={item.id}>
      <li
        key={item.id}
        id={item.id}
        className="bg-white list-none font-sans px-5 py-3 mb-0 flex justify-between"
      >
        <div>
          <h3 className="font-bold mb-1">{item.name}</h3>
          <h2 className="font-bold text-lg text-orange-500">
            ${item.price}
            <input
              type="text"
              value={`x ${item.quantity}`}
              className="ml-7 px-1 border border-gray-300 font-medium w-10 text-center"
            />
          </h2>
        </div>

        <div className="text-center font-bold">
          <button
            onClick={handleDecrease}
            className="mr-2 px-3 text-red-700 rounded-sm border border-red-800"
          >
            -
          </button>

          <button
            onClick={handleIncrease}
            className="ml-2 px-3 text-white bg-red-700 rounded-sm border border-white hover:bg-red-900"
          >
            +
          </button>
        </div>
      </li>

      <hr className=" border-red-600 m-1 border-1" />
    </section>
  );
});

export default CartItem;

// In CartItem, we use useCallback to create memoized versions of handleDecrease and handleIncrease functions. This ensures that these functions don't change between renders unless decreaseQuantity or increaseItem dependencies change.
// We use useMemo for expensive calculations that don't need to be recomputed on every render.
