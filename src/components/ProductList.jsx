/** @format */
import { categories } from "../../data/products";

// eslint-disable-next-line react/prop-types
function ProductList({ selectedProduct }) {
  const FoundedProduct = categories[selectedProduct];
  return (
    <div className="w-full flex flex-col gap-6 ">
      {FoundedProduct.subProduct.map((item, index) => {
        return (
          <div
            key={index}
            className={`bg-white flex items-center px-6 py-4 rounded-xl w-full select-none ${
              item.amount ? "justify-between" : "justify-end"
            }`}
          >
            {item.amount ? (
              <div className="w-fit flex items-center gap-2">
                <span className="text-black/45 text-xs">تومان</span>
                <p className="text-orange-700">{item.amount}</p>
              </div>
            ) : null}

            <p className="font-bold">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
