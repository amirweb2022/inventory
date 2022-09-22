import { useEffect, useState } from "react";
import CategoryFormComponent from "./CategoryFormComponent/CategoryFormComponent";
import ProductFormComponent from "./ProductFormComponent/ProductFormComponent";
import Navbar from "./Navbar/Navbar";
const InventoryApp = () => {
  // state global
  const [products, setProducts] = useState([]);
  const [categoris, setCategoris] = useState([]);
  const categoryHandler = (category) => {
    setCategoris([...categoris, category]);
  };
  const productHandler = (product) => {
    setProducts([...products, product]);
  };
  //   localStorage for category
  useEffect(() => {
    const savedCategory = JSON.parse(localStorage.getItem("category"));
    if (savedCategory) setCategoris(savedCategory);
  }, []);
  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(categoris));
  }, [categoris]);
  //   localStorage for products
  useEffect(() => {
    const savedProduct = JSON.parse(localStorage.getItem("product"));
    if (savedProduct) setProducts(savedProduct);
  }, []);
  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(products));
  }, [products]);
  const deleteHandler = (id) => {
    const filterProducts = products.filter((p) => p.id !== id);
    setProducts(filterProducts);
  };
  return (
    <section className="px-4 w-screen h-screen flex items-center flex-col">
      <Navbar
        products={products}
        number={products.filter((p) => p.id > 0).length}
        onRemove={deleteHandler}
      />
      <CategoryFormComponent setCategory={categoryHandler} />
      <ProductFormComponent categoris={categoris} setProduct={productHandler} />
    </section>
  );
};

export default InventoryApp;