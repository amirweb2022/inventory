import { useState } from "react";
import ProductListComponent from "../ProductListComponent/ProductListComponent";
const Navbar = ({ products, number, onRemove }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <header
        className="w-screen bg-slate-800 text-white shadow-md shadow-slate-600 flex 
    justify-center items-center mb-9 py-2 md:py-3"
      >
        <h2 className="text-xl">Inventory App</h2>
        <div class="flex ml-3 mb-2 h-3 w-3 relative">
          <div class="animate-ping absolute inline-flex h-6 w-6 rounded-full  bg-red-400 opacity-75"></div>
          <span
            class="relative inline-flex rounded-full cursor-pointer"
            onClick={() => setIsShow(!isShow)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>
            <span
              className="absolute right-0 bottom-0 left-3 bg-red-400 text-xs w-4 h-4 flex justify-center 
            items-center rounded-full"
            >
              {number}
            </span>
          </span>
        </div>
      </header>
      {isShow === true ? (
        <section
          className="w-screen h-screen z-10 absolute bg-white
   bg-opacity-10 backdrop-blur-lg rounded drop-shadow-lg"
        >
          <div
            className="w-full p-4 cursor-pointer flex justify-end text-red-400"
            onClick={() => setIsShow(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="w-screen flex justify-center items-center px-2 md:px-0">
            <section
              className="bg-slate-700 md:mt-12 shadow-md shadow-slate-600 flex items-center justify-center flex-col
     p-7 gap-y-10 rounded-md mb-8 w-full h-full md:w-3/4 lg:w-2/4 md:h-2/4"
            >
              <h2 className="text-xl md:text-2xl text-slate-300 mr-5">
                products
              </h2>
              <ProductListComponent products={products} onRemove={onRemove}/>
            </section>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;