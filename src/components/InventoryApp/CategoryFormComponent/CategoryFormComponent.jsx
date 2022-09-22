import { useState } from "react";
import Swal from "sweetalert2";
const CategoryFormComponent = (props) => {
  const [category, setCategory] = useState("");
  const [isShow, setIsShow] = useState(false);
  const changeHandler = (e) => {
    if (category !== null || category !== undefined || category !== "") {
      setCategory(e.target.value);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (category === "") {
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
      title: "add category",
    });
    props.setCategory(category);
    setCategory("");
    setIsShow(false);
  };
  return (
    <>
      <h2
        className="text-xl md:text-2xl text-slate-300 mr-5 mb-3 cursor-pointer"
        onClick={() => setIsShow(!isShow)}
      >
        Create New Group ?
      </h2>
      {isShow ? (
        <section
          className="bg-slate-700 shadow-lg shadow-slate-600 flex items-center justify-center flex-col
     p-7 gap-y-10 rounded-md w-full h-full md:w-3/4 lg:w-2/4 md:h-2/4"
        >
          <form
            onSubmit={submitHandler}
            className="flex justify-center items-center"
          >
            <input
              type="text"
              value={category}
              placeholder="Category Name ..."
              onChange={changeHandler}
              className="rounded-md text-sm md:text-base mr-4 outline-none p-2 text-slate-800 
          focus:outline-offset-2 focus:outline-gray-200 md:w-72 md:py-2 md:px-1"
            />
            <button
              type="submit"
              className="bg-blue-500 rounded-full text-gray-50 p-1 hover:bg-blue-600 hover:transition
           hover:duration-150"
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
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </button>
          </form>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default CategoryFormComponent;