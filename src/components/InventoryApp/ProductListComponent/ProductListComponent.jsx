import ProductComponent from "../ProductComponent/ProductComponent";

const ProductListComponent = ({ products, onRemove }) => {
  return (
    <>
      {products.length === 0 ? (
        <span className="text-slate-300 font-bold text-lg">No products</span>
      ) : (
        products.map((product) => {
          return (
            <ProductComponent
              key={product.id}
              id={product.id}
              product={product.product}
              category={product.category}
              onRemove={onRemove}
            />
          );
        })
      )}
    </>
  );
};

export default ProductListComponent;
