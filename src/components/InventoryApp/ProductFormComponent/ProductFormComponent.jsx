import { useState } from "react";
import Swal from "sweetalert2";
const ProductFormComponent = (props) => {
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const changeHandler = (e) => {
    setProduct(e.target.value);
  };
  const selectHandler = (e) => {
    setCategory(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newData = {
      id: Date.now(),
      product: product,
      category: category,
    };
    if (category === "" && product === "") {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "error",
        title: "enter fild!",
      });
      return;
    }
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "add product",
    });
    props.setProduct(newData);
    setProduct("");
    setCategory("");
  };
  return (
    <>
      <section
        className="bg-slate-700 mt-12 md:mt-6 shadow-lg shadow-slate-600 flex items-center justify-center flex-col
     p-7 gap-y-10 rounded-md mb-8 w-full h-full md:w-3/4 lg:w-2/4 md:h-2/4"
      >
        <h2 className="text-xl md:text-2xl text-slate-300 mr-5">
          Create New Product
        </h2>
        <form
          onSubmit={submitHandler}
          className="flex justify-center items-center flex-col"
        >
          <input
            type="text"
            value={product}
            onChange={changeHandler}
            placeholder="Product Name ..."
            className="rounded-md text-sm md:text-base outline-none p-2 text-slate-800 
          focus:outline-offset-2 focus:outline-gray-200 w-64 md:w-72 md:py-2 md:px-1"
          />
          <select
            value={category}
            onChange={selectHandler}
            className="mt-8 w-full outline-none py-2
          rounded-md text-sm md:text-base focus:outline-offset-2 focus:outline-blue-500"
          >
            {props.categoris.length === 0 ? (
              <option value="select category">select category</option>
            ) : (
              props.categoris.map((category, index) => {
                return (
                  <option value={category} key={index}>
                    {category}
                  </option>
                );
              })
            )}
          </select>
          <div className="mt-4 w-full py-2">
            <button
              type="submit"
              className="text-base md:text-lg bg-emerald-500 rounded-sm text-gray-50 py-1 px-2 
            hover:bg-emerald-600 hover:transition
            hover:duration-150"
            >
              Register
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ProductFormComponent;