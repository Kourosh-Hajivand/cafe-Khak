/** @format */

import { useState } from "react";
import "./App.css";
import TitleSlider from "./components/TitleSlider";
import ProductList from "./components/ProductList";
import { Call, Instagram } from "iconsax-react";
function App() {
  const [Selected, setSelected] = useState(0);
  return (
    <div className="w-full h-screen ">
      <img
        src="/Background.jpg"
        className="w-full h-full absolute object-cover -z-40"
        alt=""
      />
      <div className="w-full h-full max-w-[650px] mx-auto flex items-center flex-col gap-6 flex-1 p-6 ">
        <div className="w-[120px] h-[120px] relative mx-auto">
          <img
            src="/logo.png"
            className="absolute object-cover rounded-full overflow-hidden"
          />
        </div>
        <div className="max-h-[150px] w-full">
          <TitleSlider selectedIndex={(e) => setSelected(e)} />
        </div>
        <div className="flex-1 select-none w-full rounded-2xl h-full overflow-y-scroll">
          <ProductList selectedProduct={Selected} />
        </div>
        <div className="w-full flex items-center justify-center gap-4 text-white ">
          <Instagram size="32" variant="Bold" />
          <Call size="32" variant="Bold" />
        </div>
      </div>
    </div>
  );
}

export default App;
